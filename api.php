<?php
require __DIR__.'/config.php';
header('Content-Type: application/json; charset=utf-8');
$r=$_GET['r']??''; $out=[];
try{
switch($r){
case 'regions': $out=db()->query('SELECT * FROM regions')->fetchAll(); break;
case 'news': $out=db()->query('SELECT * FROM news ORDER BY published_at DESC,id DESC LIMIT 12')->fetchAll(); break;
case 'history': // riwayat gempa tersimpan per wilayah
  $s=db()->prepare('SELECT event_time,lat,lon,mag,depth_km,place,source FROM earthquakes WHERE lon BETWEEN (SELECT min_lon FROM regions WHERE id=:i) AND (SELECT max_lon FROM regions WHERE id=:i) AND lat BETWEEN (SELECT min_lat FROM regions WHERE id=:i) AND (SELECT max_lat FROM regions WHERE id=:i) ORDER BY event_time DESC LIMIT 100');
  $s->execute([':i'=>$_GET['id']??'']); $out=$s->fetchAll(); break;
case 'bmkg': // proxy + cache 60 dtk + simpan ke MySQL
  $f=$_GET['f']??'gempaterkini';
  if(!in_array($f,['autogempa','gempaterkini','gempadirasakan'],true)){http_response_code(400);$out=['error'=>'bad file'];break;}
  $c=sys_get_temp_dir()."/bmkg_$f.json";
  if(!is_file($c)||time()-filemtime($c)>60){
    $raw=@file_get_contents("https://data.bmkg.go.id/DataMKG/TEWS/$f.json",false,stream_context_create(['http'=>['timeout'=>8]]));
    if($raw)file_put_contents($c,$raw);
  }
  $j=is_file($c)?json_decode(file_get_contents($c),true):null;
  $g=$j['Infogempa']['gempa']??[]; if($g&&isset($g['Magnitude']))$g=[$g];
  $ins=db()->prepare('INSERT OR IGNORE INTO earthquakes(event_time,lat,lon,mag,depth_km,place) VALUES(?,?,?,?,?,?)');
  foreach($g as $q){
    [$la,$lo]=array_map('floatval',explode(',',$q['Coordinates']));
    $t=gmdate('Y-m-d H:i:s',strtotime($q['DateTime']));
    $d=(float)$q['Kedalaman'];
    $ins->execute([$t,$la,$lo,(float)$q['Magnitude'],$d,$q['Wilayah']]);
    $out[]=['time'=>$t,'lat'=>$la,'lon'=>$lo,'mag'=>(float)$q['Magnitude'],'depth'=>$d,'place'=>$q['Wilayah'],
      'shakemap'=>isset($q['Shakemap'])?'https://data.bmkg.go.id/DataMKG/TEWS/'.$q['Shakemap']:null,'felt'=>$q['Dirasakan']??($q['Potensi']??'')];
  } break;
case 'posts':
  if($_SERVER['REQUEST_METHOD']==='POST'){
    $d=json_decode(file_get_contents('php://input'),true)??[];
    $a=trim($d['author']??'');$t=trim($d['title']??'');$b=trim($d['body']??'');$rg=$d['region_id']??'';
    if(mb_strlen($a)<2||mb_strlen($a)>60||mb_strlen($t)<3||mb_strlen($t)>120||mb_strlen($b)<10||mb_strlen($b)>2000){http_response_code(422);$out=['error'=>'invalid'];break;}
    db()->prepare('INSERT INTO posts(region_id,author,title,body) VALUES(?,?,?,?)')->execute([substr($rg,0,20),$a,$t,$b]);
    $out=['ok'=>true];
  } else $out=db()->query('SELECT region_id,author,title,body,created_at FROM posts ORDER BY id DESC LIMIT 30')->fetchAll();
  break;
default: http_response_code(404); $out=['error'=>'unknown'];
}}catch(Throwable $e){http_response_code(500);$out=['error'=>'server'];}
echo json_encode($out,JSON_UNESCAPED_UNICODE);
