<?php
const DB_HOST='127.0.0.1', DB_NAME='gempa_info', DB_USER='root', DB_PASS='';
const SQLITE_DB_FILE = __DIR__.'/.gempa_info.sqlite';

function init_sqlite_db(PDO $pdo): void {
  $pdo->exec("CREATE TABLE IF NOT EXISTS regions (
    id TEXT PRIMARY KEY,
    name TEXT,
    lat REAL,
    lon REAL,
    zoom REAL,
    min_lon REAL,
    min_lat REAL,
    max_lon REAL,
    max_lat REAL,
    tectonic_id TEXT,
    tectonic_en TEXT,
    soil_id TEXT,
    soil_en TEXT,
    faults TEXT
  )");

  $pdo->exec("CREATE TABLE IF NOT EXISTS earthquakes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_time DATETIME,
    lat REAL,
    lon REAL,
    mag REAL,
    depth_km REAL,
    place TEXT,
    source TEXT DEFAULT 'BMKG'
  )");
  $pdo->exec('CREATE UNIQUE INDEX IF NOT EXISTS uq_earthquakes ON earthquakes(event_time, lat, lon)');
  $pdo->exec('CREATE INDEX IF NOT EXISTS idx_earthquakes_mag ON earthquakes(mag)');
  $pdo->exec('CREATE INDEX IF NOT EXISTS idx_earthquakes_time ON earthquakes(event_time)');

  $pdo->exec("CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_id TEXT,
    title_en TEXT,
    body_id TEXT,
    body_en TEXT,
    url TEXT,
    published_at DATE
  )");

  $pdo->exec("CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    region_id TEXT,
    author TEXT,
    title TEXT,
    body TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )");

  $regions = [
    ['sumatra','Sumatra',0.5,101.5,5.2,95,-6,106,6,
      'Zona subduksi Sunda (megathrust) di barat Sumatra dan Sesar Besar Sumatra sepanjang Bukit Barisan.','Sunda subduction zone (megathrust) off western Sumatra and the Great Sumatran Fault along the Barisan range.',
      'Cekungan aluvial lunak dan endapan abu vulkanik memperkuat guncangan (contoh: Padang, Banda Aceh).','Soft alluvial basins and volcanic ash deposits amplify shaking (e.g. Padang, Banda Aceh).','Sesar Besar Sumatra, Megathrust Sunda, Sesar Mentawai'],
    ['jawa','Jawa',-7.5,110.5,6,105,-9,115,-5.5,
      'Subduksi Lempeng Indo-Australia di selatan Jawa dan sesar aktif darat yang dangkal.','Indo-Australian plate subduction south of Java plus shallow active inland faults.',
      'Dataran aluvial dan tanah vulkanik jenuh air rentan amplifikasi dan likuifaksi (contoh: Yogyakarta 2006, Cianjur 2022).','Saturated alluvial plains and volcanic soils are prone to amplification and liquefaction (e.g. Yogyakarta 2006, Cianjur 2022).','Sesar Opak, Sesar Lembang, Sesar Cimandiri, Megathrust Selatan Jawa'],
    ['kalimantan','Kalimantan',0.5,114,5.2,108,-4,119,5,
      'Berada di tepi stabil Paparan Sunda; aktivitas seismik rendah, kecuali Kalimantan Timur dan Sabah.','On the stable Sunda Shelf interior; low seismicity except East Kalimantan and Sabah.',
      'Gambut dan lempung lunak di dataran rendah dapat memperbesar getaran jauh.','Peat and soft clay on lowlands can amplify distant shaking.','Sesar Mangkalihat, Sesar Tarakan'],
    ['sulawesi','Sulawesi',-1.5,121,5.4,118,-6,126,3,
      'Pertemuan tiga lempeng (Eurasia, Indo-Australia, Pasifik) dengan sesar geser aktif.','Triple junction of Eurasian, Indo-Australian and Pacific plates with active strike-slip faults.',
      'Lembah aluvial jenuh seperti Palu terbukti rentan likuifaksi dan tanah mengalir (2018).','Saturated alluvial valleys such as Palu proved prone to liquefaction and flow slides (2018).','Sesar Palu-Koro, Sesar Matano, Sesar Gorontalo, Sesar Lawanopo'],
    ['nusatenggara','Nusa Tenggara',-9,119,5.8,115,-11,126,-8,
      'Subduksi di selatan dan Sesar Naik Busur Belakang Flores di utara.','Subduction to the south and the Flores back-arc thrust to the north.',
      'Batuan vulkanik muda dan endapan pantai; lereng terjal rawan longsor akibat gempa.','Young volcanic rock and coastal deposits; steep slopes prone to quake-triggered landslides.','Flores Back-arc Thrust, Palung Timor, Sesar Naik Lombok'],
    ['papua','Maluku dan Papua',-4,134,4.6,126,-9,141,2,
      'Tumbukan Lempeng Pasifik dan Australia, sehingga sangat aktif.','Collision of Pacific and Australian plates, making it highly active.',
      'Pegunungan batuan keras berselang dengan delta dan rawa aluvial tebal di pesisir.','Hard-rock mountains alternate with thick alluvial deltas and swamps on the coast.','Sesar Sorong, Sesar Yapen, Sesar Naik Mamberamo, Palung Seram']
  ];

  $insRegion = $pdo->prepare('INSERT OR IGNORE INTO regions(id,name,lat,lon,zoom,min_lon,min_lat,max_lon,max_lat,tectonic_id,tectonic_en,soil_id,soil_en,faults) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
  foreach ($regions as $row) { $insRegion->execute($row); }

  $news = [
    ['Cara membaca laporan gempa BMKG','How to read a BMKG earthquake report','Magnitudo menunjukkan energi gempa, kedalaman menunjukkan jarak sumber dari permukaan, dan skala MMI menggambarkan dampak guncangan.','Magnitude shows released energy, depth shows how far the source lies below the surface, and the MMI scale describes shaking impact.','https://www.bmkg.go.id/gempabumi',date('Y-m-d')],
    ['Drop, Cover, Hold On saat gempa','Drop, Cover, Hold On during a quake','Merunduk, lindungi kepala, dan berlindung di bawah meja kuat. Jauhi kaca dan benda yang mudah jatuh.','Drop down, cover your head, and shelter under a sturdy table. Stay away from glass and objects that can fall.','https://www.usgs.gov/programs/earthquake-hazards',date('Y-m-d')],
    ['Memantau gempa dunia di EMSC','Following global quakes on EMSC','EMSC menerbitkan laporan awal gempa dunia dalam hitungan menit.','EMSC publishes first reports of global earthquakes within minutes.','https://www.emsc.eu/',date('Y-m-d')],
  ];

  $insNews = $pdo->prepare('INSERT OR IGNORE INTO news(title_id,title_en,body_id,body_en,url,published_at) VALUES(?,?,?,?,?,?)');
  foreach ($news as $row) { $insNews->execute($row); }
}

function db(): PDO {
  static $p = null;
  if (!$p) {
    try {
      $p = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      ]);
    } catch (Throwable $e) {
      $p = new PDO('sqlite:' . SQLITE_DB_FILE, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      ]);
      init_sqlite_db($p);
    }
  }
  return $p;
}


const DEVELOPERS = [
  ['name' => 'Talitha Syifa Al Fath', 'nim' => '', 'role' => 'UI/UX Designer & Front-End Developer', 'github' => 'https://github.com/tsyf02/'],
  ['name' => 'Immanuel Dewantara', 'nim' => '', 'role' => 'Developer', 'github' => 'https://github.com/Vert969'],
  ['name' => 'Galang Kalingga', 'nim' => '', 'role' => 'Developer', 'github' => 'https://github.com/kalinggarl'],
  ['name' => 'Anindita Dwi Septiantika', 'nim' => '', 'role' => 'Developer', 'github' => 'https://github.com/aninditatika6-del'],
];
