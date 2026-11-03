CREATE DATABASE IF NOT EXISTS gempa_info CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gempa_info;
CREATE TABLE regions(id VARCHAR(20) PRIMARY KEY, name VARCHAR(60), lat DOUBLE, lon DOUBLE, zoom DOUBLE,
 min_lon DOUBLE, min_lat DOUBLE, max_lon DOUBLE, max_lat DOUBLE,
 tectonic_id TEXT, tectonic_en TEXT, soil_id TEXT, soil_en TEXT, faults VARCHAR(255));
CREATE TABLE earthquakes(id INT AUTO_INCREMENT PRIMARY KEY, event_time DATETIME, lat DOUBLE, lon DOUBLE,
 mag DOUBLE, depth_km DOUBLE, place VARCHAR(255), source VARCHAR(20) DEFAULT 'BMKG',
 UNIQUE KEY uq(event_time,lat,lon), KEY(mag), KEY(event_time));
CREATE TABLE news(id INT AUTO_INCREMENT PRIMARY KEY, title_id VARCHAR(200), title_en VARCHAR(200),
 body_id TEXT, body_en TEXT, url VARCHAR(255), published_at DATE);
CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, region_id VARCHAR(20), author VARCHAR(60),
 title VARCHAR(120), body TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO regions VALUES
('sumatra','Sumatra',0.5,101.5,5.2,95,-6,106,6,
'Zona subduksi Sunda (megathrust) di barat Sumatra dan Sesar Besar Sumatra sepanjang Bukit Barisan.','Sunda subduction zone (megathrust) off western Sumatra and the Great Sumatran Fault along the Barisan range.',
'Cekungan aluvial lunak dan endapan abu vulkanik memperkuat guncangan (contoh: Padang, Banda Aceh).','Soft alluvial basins and volcanic ash deposits amplify shaking (e.g. Padang, Banda Aceh).','Sesar Besar Sumatra, Megathrust Sunda, Sesar Mentawai'),
('jawa','Jawa',-7.5,110.5,6,105,-9,115,-5.5,
'Subduksi Lempeng Indo-Australia di selatan Jawa dan sesar aktif darat yang dangkal.','Indo-Australian plate subduction south of Java plus shallow active inland faults.',
'Dataran aluvial dan tanah vulkanik jenuh air rentan amplifikasi dan likuifaksi (contoh: Yogyakarta 2006, Cianjur 2022).','Saturated alluvial plains and volcanic soils are prone to amplification and liquefaction (e.g. Yogyakarta 2006, Cianjur 2022).','Sesar Opak, Sesar Lembang, Sesar Cimandiri, Megathrust Selatan Jawa'),
('kalimantan','Kalimantan',0.5,114,5.2,108,-4,119,5,
'Berada di tepi stabil Paparan Sunda; aktivitas seismik rendah, kecuali Kalimantan Timur dan Sabah.','On the stable Sunda Shelf interior; low seismicity except East Kalimantan and Sabah.',
'Gambut dan lempung lunak di dataran rendah dapat memperbesar getaran jauh.','Peat and soft clay on lowlands can amplify distant shaking.','Sesar Mangkalihat, Sesar Tarakan'),
('sulawesi','Sulawesi',-1.5,121,5.4,118,-6,126,3,
'Pertemuan tiga lempeng (Eurasia, Indo-Australia, Pasifik) dengan sesar geser aktif.','Triple junction of Eurasian, Indo-Australian and Pacific plates with active strike-slip faults.',
'Lembah aluvial jenuh seperti Palu terbukti rentan likuifaksi dan tanah mengalir (2018).','Saturated alluvial valleys such as Palu proved prone to liquefaction and flow slides (2018).','Sesar Palu-Koro, Sesar Matano, Sesar Gorontalo, Sesar Lawanopo'),
('nusatenggara','Nusa Tenggara',-9,119,5.8,115,-11,126,-8,
'Subduksi di selatan dan Sesar Naik Busur Belakang Flores di utara.','Subduction to the south and the Flores back-arc thrust to the north.',
'Batuan vulkanik muda dan endapan pantai; lereng terjal rawan longsor akibat gempa.','Young volcanic rock and coastal deposits; steep slopes prone to quake-triggered landslides.','Flores Back-arc Thrust, Palung Timor, Sesar Naik Lombok'),
('papua','Maluku dan Papua',-4,134,4.6,126,-9,141,2,
'Tumbukan Lempeng Pasifik dan Australia, sehingga sangat aktif.','Collision of Pacific and Australian plates, making it highly active.',
'Pegunungan batuan keras berselang dengan delta dan rawa aluvial tebal di pesisir.','Hard-rock mountains alternate with thick alluvial deltas and swamps on the coast.','Sesar Sorong, Sesar Yapen, Sesar Naik Mamberamo, Palung Seram');
INSERT INTO news(title_id,title_en,body_id,body_en,url,published_at) VALUES
('Cara membaca laporan gempa BMKG','How to read a BMKG earthquake report','Magnitudo menunjukkan energi gempa, kedalaman menunjukkan jarak sumber dari permukaan, dan skala MMI menggambarkan dampak guncangan.','Magnitude shows released energy, depth shows how far the source lies below the surface, and the MMI scale describes shaking impact.','https://www.bmkg.go.id/gempabumi',CURDATE()),
('Drop, Cover, Hold On saat gempa','Drop, Cover, Hold On during a quake','Merunduk, lindungi kepala, dan berlindung di bawah meja kuat. Jauhi kaca dan benda yang mudah jatuh.','Drop down, cover your head, and shelter under a sturdy table. Stay away from glass and objects that can fall.','https://www.usgs.gov/programs/earthquake-hazards',CURDATE()),
('Memantau gempa dunia di EMSC','Following global quakes on EMSC','EMSC menerbitkan laporan awal gempa dunia dalam hitungan menit.','EMSC publishes first reports of global earthquakes within minutes.','https://www.emsc.eu/',CURDATE());
