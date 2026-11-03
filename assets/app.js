const T={
id:{brand:'Peta Gempa Nusantara',n_map:'Peta',n_learn:'Pelajari',n_live:'Data terkini',n_news:'Berita',n_comm:'Komunitas',theme:'Gelap/Terang',
h1:'Indonesia berdiri di atas Cincin Api',h1p:'Riwayat gempa, struktur tanah, dan data terbaru BMKG untuk setiap pulau. Pilih pulau di peta untuk melihatnya dalam 3D.',
pick:'Pilih pulau:',mapnote:'Citra: Esri World Imagery, relief: AWS Terrain Tiles. Titik: BMKG (gempa terkini) dan USGS (M4,5+ sepekan).',
all:'Semua',tect:'Penyebab tektonik',soil:'Struktur tanah',faults:'Sesar utama',hist:'Riwayat tersimpan',nohist:'Belum ada data tersimpan. Buka halaman ini secara berkala agar database terisi.',
latest:'Gempa terbaru',gear:'Alat ukur & data resmi',gearp:'Jaringan sensor, peta guncangan, dan daftar lengkap tersedia langsung di BMKG.',open_bmkg:'Buka BMKG Gempabumi',open_list:'Daftar gempa terkini',tbl:'15 gempa M5+ terakhir (BMKG)',
c_time:'Waktu (UTC)',c_depth:'Kedalaman',c_place:'Wilayah',share:'Bagikan ulasan kejadian',reports:'Ulasan terbaru',send:'Kirim ulasan',f_name:'Nama',f_title:'Judul kejadian',f_body:'Apa yang Anda rasakan dan lihat?',
sent:'Terkirim.',err:'Gagal mengirim. Periksa isian.',team:'Tim pengembang',credit:'Sumber data: BMKG, USGS, EMSC. Konten edukasi: laporan presentasi Kelompok 8.',loading:'Memuat…',nodata:'Data belum tersedia.',read:'Baca selengkapnya',depth:'km',noposts:'Belum ada ulasan. Jadilah yang pertama.',
tabs:[
['Definisi','<p>Gempa bumi terjadi akibat pelepasan energi secara tiba-tiba di dalam bumi, biasanya oleh pergerakan lempeng tektonik. Ketika tekanan melebihi batas elastis batuan, energi dilepaskan sebagai gelombang seismik.</p><p>Dua lempeng yang bergerak, bertumbukan, menjauh, atau bergeser dapat menumpuk tekanan. Jika sudah melewati kekuatan batuan, batuan patah atau bergeser dan menghasilkan gempa.</p>'],
['Jenis','<ul><li><b>Tektonik:</b> akibat pergerakan lempeng; paling umum dan bisa sangat besar.</li><li><b>Vulkanik:</b> akibat aktivitas magma di sekitar gunung api.</li><li><b>Runtuhan:</b> akibat runtuhnya gua atau struktur bawah tanah, biasanya kecil.</li><li><b>Buatan:</b> akibat pertambangan, bendungan, atau peledakan.</li></ul>'],
['Penyebab','<ul><li>Pergerakan lempeng tektonik</li><li>Aktivitas sesar</li><li>Aktivitas vulkanik</li><li>Runtuhan atau longsoran besar</li><li>Aktivitas manusia: pertambangan, pengeboran, bendungan</li></ul>'],
['Dampak negatif','<ul><li>Kerusakan infrastruktur: bangunan, jalan, fasilitas umum.</li><li>Bencana susulan: longsor, likuifaksi, tsunami.</li><li>Perubahan lingkungan: aliran sungai, erosi, kerusakan ekosistem.</li><li>Korban jiwa dan cedera akibat bangunan atau benda yang runtuh.</li><li>Dampak sosial dan psikologis: kehilangan tempat tinggal, pendidikan terganggu, trauma.</li></ul>'],
['Dampak positif','<ul><li>Sumber panas bumi (geotermal) sebagai energi terbarukan.</li><li>Mineral dan batuan terangkat mendekati permukaan.</li><li>Kemajuan seismologi: gelombang gempa memetakan struktur dalam bumi.</li><li>Inovasi konstruksi tahan gempa.</li></ul>'],
['Penanggulangan','<ul><li><b>Tanggap darurat dan SAR:</b> pencarian dan evakuasi cepat; fokus 72 jam pertama.</li><li><b>Bantuan medis dan logistik:</b> posko kesehatan, selimut, makanan siap saji, air bersih.</li><li><b>Pemulihan fasilitas:</b> listrik, air, akses jalan.</li><li><b>Dukungan psikososial:</b> pendampingan trauma, terutama anak-anak dan lansia.</li><li><b>Lokal:</b> BPBD, relawan, pengamanan oleh polisi dan TNI, pendataan kerusakan.</li><li><b>Global:</b> dana darurat, tim SAR asing, tenaga medis, kerja sama tata ruang aman.</li></ul>'],
['Mitigasi','<ul><li><b>Sebelum:</b> bangun konstruksi tahan gempa, kenali jalur evakuasi, siapkan tas siaga (air, makanan, obat, senter).</li><li><b>Saat:</b> tetap tenang; Drop, Cover, Hold On; jauhi kaca dan benda yang mudah jatuh.</li><li><b>Sesudah:</b> keluar ke tempat terbuka setelah guncangan berhenti, periksa diri dan sekitar, waspadai gempa susulan.</li></ul>'],
['Kesimpulan','<p>Gempa bumi dipicu pergerakan lempeng, aktivitas gunung api, hingga ulah manusia. Dampaknya bisa merusak dan menelan korban, tetapi juga memberi potensi panas bumi dan memicu inovasi bangunan tahan gempa. Agar risikonya ditekan, kita perlu memahami mitigasi di setiap tahap dan bekerja sama dari tingkat lokal sampai internasional.</p>']]},
en:{brand:'SHAKELOG',n_map:'Map',n_learn:'Learn',n_live:'Live data',n_news:'News',n_comm:'Community',theme:'Dark/Light',
h1:'Indonesia sits on the Ring of Fire',h1p:'Quake history, ground structure and the latest BMKG data for every island. Pick an island on the map to see it in 3D.',
pick:'Pick an island:',mapnote:'Imagery: Esri World Imagery, relief: AWS Terrain Tiles. Dots: BMKG (latest) and USGS (M4.5+ past week).',
all:'All',tect:'Tectonic cause',soil:'Ground structure',faults:'Main faults',hist:'Stored history',nohist:'No stored data yet. Visit this page regularly so the database fills up.',
latest:'Latest earthquake',gear:'Instruments & official data',gearp:'The sensor network, shakemaps and the full list are available directly at BMKG.',open_bmkg:'Open BMKG Earthquakes',open_list:'Latest quake list',tbl:'Last 15 M5+ earthquakes (BMKG)',
c_time:'Time (UTC)',c_depth:'Depth',c_place:'Region',share:'Share a quake report',reports:'Latest reports',send:'Send report',f_name:'Name',f_title:'Event title',f_body:'What did you feel and see?',
sent:'Sent.',err:'Could not send. Check the fields.',team:'Development team',credit:'Data: BMKG, USGS, EMSC.',loading:'Loading…',nodata:'No data yet.',read:'Read more',depth:'km',noposts:'No reports yet. Be the first.',
tabs:[
['Definition','<p>An earthquake is a sudden release of energy inside the Earth, usually caused by tectonic plate movement. When stress exceeds the elastic limit of rock, the energy is released as seismic waves.</p><p>Plates that collide, pull apart or slide past each other build up stress. Once it exceeds the strength of the rock, the rock breaks or slips and an earthquake occurs.</p>'],
['Types','<ul><li><b>Tectonic:</b> caused by plate movement; the most common and can be very large.</li><li><b>Volcanic:</b> caused by magma activity near volcanoes.</li><li><b>Collapse:</b> caused by caves or underground structures collapsing, usually small.</li><li><b>Induced:</b> caused by mining, dams or explosions.</li></ul>'],
['Causes','<ul><li>Tectonic plate movement</li><li>Fault activity</li><li>Volcanic activity</li><li>Large collapses or landslides</li><li>Human activity: mining, drilling, dams</li></ul>'],
['Negative impacts','<ul><li>Infrastructure damage: buildings, roads, public facilities.</li><li>Secondary disasters: landslides, liquefaction, tsunamis.</li><li>Environmental change: river courses, erosion, ecosystem damage.</li><li>Casualties and injuries from collapsing buildings or falling objects.</li><li>Social and psychological effects: loss of housing, disrupted schooling, trauma.</li></ul>'],
['Positive impacts','<ul><li>Geothermal heat as a renewable energy source.</li><li>Minerals and rock lifted closer to the surface.</li><li>Seismology advances: quake waves map the Earth\'s interior.</li><li>Innovation in earthquake-resistant construction.</li></ul>'],
['Response','<ul><li><b>Emergency response and SAR:</b> fast search and evacuation; the first 72 hours matter most.</li><li><b>Medical and logistics:</b> field clinics, blankets, ready meals, clean water.</li><li><b>Restoring facilities:</b> power, water, road access.</li><li><b>Psychosocial support:</b> trauma counselling, especially for children and the elderly.</li><li><b>Local:</b> regional disaster agency (BPBD), volunteers, police and military security, damage surveys.</li><li><b>Global:</b> emergency funds, foreign SAR teams, medical staff, safer spatial planning.</li></ul>'],
['Mitigation','<ul><li><b>Before:</b> build earthquake-resistant structures, know evacuation routes, pack an emergency bag (water, food, medicine, flashlight).</li><li><b>During:</b> stay calm; Drop, Cover, Hold On; keep away from glass and falling objects.</li><li><b>After:</b> go outside once shaking stops, check yourself and others, expect aftershocks.</li></ul>'],
['Conclusion','<p>Earthquakes are triggered by plate movement, volcanic activity and even human activity. They can destroy and take lives, yet also offer geothermal potential and spur earthquake-resistant design. To reduce risk, we must understand mitigation at every stage and cooperate from the local to the international level.</p>']]}};
let L=localStorage.lang||'id',R=[],map,cur=null,tabI=0;const $=s=>document.querySelector(s),t=k=>T[L][k];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const j=(u,o)=>fetch(u,o).then(r=>{if(!r.ok)throw 0;return r.json()});
function applyLang(){document.documentElement.lang=L;document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
 document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));drawTabs();drawChips();showRegion(cur,false);loadNews();loadPosts();drawLatest()}
function setTheme(m){document.documentElement.dataset.theme=m;localStorage.theme=m}
setTheme(localStorage.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#theme').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
$('#lang').onclick=()=>{L=L==='id'?'en':'id';localStorage.lang=L;applyLang()};
function drawTabs(){$('#tabs').innerHTML=t('tabs').map((x,i)=>`<button role="tab" aria-selected="${i===tabI}" data-t="${i}">${x[0]}</button>`).join('');
 $('#tabbody').innerHTML=t('tabs')[tabI][1];$('#tabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{tabI=+b.dataset.t;drawTabs()})}
function drawChips(){$('#chips').innerHTML=`<button data-r="">${t('all')}</button>`+R.map(r=>`<button data-r="${r.id}" class="${cur===r.id?'on':''}">${esc(r.name)}</button>`).join('');
 $('#chips').querySelectorAll('button').forEach(b=>b.onclick=()=>showRegion(b.dataset.r||null,true));
 $('#rsel').innerHTML=R.map(r=>`<option value="${r.id}">${esc(r.name)}</option>`).join('')}
async function showRegion(id,fly){cur=id;$('#chips').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.r===id));
 const r=R.find(x=>x.id===id);if(!r){$('#info').innerHTML='';if(fly&&map)map.flyTo({center:[118,-2],zoom:3.6,pitch:0,bearing:0,duration:2200});return}
 if(fly&&map)map.flyTo({center:[r.lon,r.lat],zoom:r.zoom,pitch:62,bearing:(Math.random()*90-45),duration:3200,essential:false});
 let h='';try{const q=await j('api.php?r=history&id='+r.id);h=q.length?'<ul>'+q.slice(0,6).map(e=>`<li>M${e.mag} · ${esc(e.place)}<br><small>${esc(e.event_time)} UTC</small></li>`).join('')+'</ul>':`<p>${t('nohist')}</p>`}catch(e){h=`<p>${t('nodata')}</p>`}
 $('#info').innerHTML=`<h3>${esc(r.name)}</h3><dl><dt>${t('tect')}</dt><dd>${esc(r['tectonic_'+L])}</dd><dt>${t('soil')}</dt><dd>${esc(r['soil_'+L])}</dd><dt>${t('faults')}</dt><dd>${esc(r.faults)}</dd><dt>${t('hist')}</dt><dd>${h}</dd></dl>`}
function initMap(){const rd='https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
 map=new maplibregl.Map({container:'map',center:[118,-2],zoom:3.6,maxPitch:75,attributionControl:{compact:true},
 style:{version:8,sources:{sat:{type:'raster',tileSize:256,maxzoom:18,attribution:'Esri, Maxar, Earthstar Geographics',tiles:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}']},
 dem:{type:'raster-dem',tiles:[rd],encoding:'terrarium',tileSize:256,maxzoom:14,attribution:'AWS Terrain Tiles'}},
 layers:[{id:'sat',type:'raster',source:'sat'},{id:'hs',type:'hillshade',source:'dem',paint:{'hillshade-exaggeration':.35}}],terrain:{source:'dem',exaggeration:1.6}}});
 map.addControl(new maplibregl.NavigationControl({visualizePitch:true}));
 map.on('load',()=>{map.addSource('q',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
  map.addLayer({id:'q',type:'circle',source:'q',paint:{'circle-radius':['interpolate',['linear'],['get','mag'],3,4,6,12,8,22],'circle-color':['match',['get','src'],'BMKG','#e8402a','#f0b441'],'circle-opacity':.8,'circle-stroke-color':'#fff','circle-stroke-width':1}});
  map.on('click','q',e=>{const p=e.features[0].properties;new maplibregl.Popup().setLngLat(e.lngLat).setHTML(`<b>M${esc(p.mag)}</b> (${esc(p.src)})<br>${esc(p.place)}<br>${esc(p.time)}`).addTo(map)});
  map.on('mouseenter','q',()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave','q',()=>map.getCanvas().style.cursor='');
  loadQuakes()});
 map.on('click',e=>{if(map.queryRenderedFeatures(e.point,{layers:['q']}).length)return;
  const r=R.filter(x=>e.lngLat.lng>=x.min_lon&&e.lngLat.lng<=x.max_lon&&e.lngLat.lat>=x.min_lat&&e.lngLat.lat<=x.max_lat).sort((a,b)=>(a.max_lon-a.min_lon)*(a.max_lat-a.min_lat)-(b.max_lon-b.min_lon)*(b.max_lat-b.min_lat))[0];if(r)showRegion(r.id,true)})}
let latest=null,feats=[];
async function loadQuakes(){try{const b=await j('api.php?r=bmkg&f=gempaterkini');
  feats=b.map(q=>({type:'Feature',geometry:{type:'Point',coordinates:[q.lon,q.lat]},properties:{mag:q.mag,src:'BMKG',place:q.place,time:q.time+' UTC'}}));
  $('#tbl tbody').innerHTML=b.map(q=>`<tr><td>${esc(q.time)}</td><td>${q.mag}</td><td>${q.depth} ${t('depth')}</td><td>${esc(q.place)}</td></tr>`).join('')}catch(e){}
 try{const a=await j('api.php?r=bmkg&f=autogempa');latest=a[0]||null;drawLatest()}catch(e){}
 try{const u=await j('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson');
  feats=feats.concat(u.features.filter(f=>{const[x,y]=f.geometry.coordinates;return x>94&&x<142&&y>-12&&y<7}).map(f=>({type:'Feature',geometry:{type:'Point',coordinates:f.geometry.coordinates.slice(0,2)},properties:{mag:f.properties.mag,src:'USGS',place:f.properties.place,time:new Date(f.properties.time).toISOString().replace('T',' ').slice(0,16)+' UTC'}})))}catch(e){}
 map.getSource('q').setData({type:'FeatureCollection',features:feats})}
function drawLatest(){const q=latest;$('#auto').innerHTML=!q?t('loading'):`<div class="big">M${q.mag}</div><p><b>${esc(q.place)}</b><br>${esc(q.time)} UTC · ${q.depth} ${t('depth')}</p><p>${esc(q.felt)}</p>${q.shakemap?`<img src="${esc(q.shakemap)}" alt="Shakemap" style="max-width:100%" loading="lazy">`:''}`}
async function loadNews(){try{const n=await j('api.php?r=news');$('#news').innerHTML=n.map(x=>`<article class="nw"><h3>${esc(x['title_'+L])}</h3><p>${esc(x['body_'+L])}</p><small>${esc(x.published_at)}</small> <a href="${esc(x.url)}" target="_blank" rel="noopener">${t('read')}</a></article>`).join('')}catch(e){$('#news').textContent=t('nodata')}}
async function loadPosts(){try{const p=await j('api.php?r=posts');$('#posts').innerHTML=p.length?p.map(x=>{const r=R.find(z=>z.id===x.region_id);return`<div class="post"><b>${esc(x.title)}</b><br><small>${esc(x.author)}${r?' · '+esc(r.name):''} · ${esc(x.created_at)}</small><p>${esc(x.body)}</p></div>`}).join(''):`<p>${t('noposts')}</p>`}catch(e){$('#posts').textContent=t('nodata')}}
$('#pf').onsubmit=async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
 try{await j('api.php?r=posts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});$('#msg').textContent=t('sent');e.target.reset();loadPosts()}catch(x){$('#msg').textContent=t('err')}};
(async()=>{try{R=await j('api.php?r=regions')}catch(e){}applyLang();initMap()})();
