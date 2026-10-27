# SEISMO: Seismic Monitoring & Operational System
> **Technical Repository Name:** `shakelog-system`

Welcome to the official repository of **SEISMO** (shakelog-system), is a web-based seismic disaster information and logging system designed to document historical earthquake data, visualize disaster statistics, and provide public mitigation guidelines.

Developed as a college project by **Kelompok 8**:
* **Talitha Syifa** (124250173)
* **Immanuel Yosia** (124250186)
* **Galang Kalingga** (124250188)
* **Anindita Dwi Septiantika** (124250201)

---

## System & Repository Philosophy

We bridge the gap between earth science and technology through two logically connected identities:

1. **Application Title (SEISMO):** An acronym for **SEIS**mic **M**onitoring & **O**perational System. Rooted in Seismology, it represents the scientific, academic, and formal foundation of this project in analyzing tectonic activities suitable for institutional presentations.
2. **Repository Name (`shakelog-system`):** Represents the technical architecture. It functions as a complete software **System** that captures earthquake **Shakes** (vibrations) and transforms them into structured data **Logs** (chronological database records of years, locations, and casualties) inside the MySQL database.

---

## Key Features

1. **Earthquake Historical Log:** Comprehensive database records of Indonesia's largest and most historical earthquakes (e.g., Aceh 2004, Yogyakarta 2006, and Palu 2018).
2. **Dynamic Chart Visualizations:** Fully integrated with `Chart.js` to render interactive web charts showing trends in magnitude scales and casualty statistics.
3. **Multimedia Gallery Integration:** Interactive media sections showcasing relevant disaster footage and tectonic diagrams (academically referenced from Vox and Geologia).
4. **Disaster Mitigation Guide:** Public education modules providing actionable safety steps for **Before**, **During** (Drop, Cover, Hold On), and **After** an earthquake event.


shakelog-system/
├── config/
│   └── database.php      # Koneksi ke MySQL
├── admin/                # Halaman untuk Kelompok 8 menginput data
│   ├── index.php         # Dashboard admin
│   ├── input-gempa.php   # Form tambah data gempa & korban
│   └── input-media.php   # Form input link gambar & video YouTube
├── assets/
│   ├── css/              # Styling tema (Gunakan warna krem/cokelat seperti slide)
│   └── js/               # Script untuk Chart.js (Grafik)
├── views/
│   ├── mitgasi.php       # Halaman Edukasi Sebelum-Saat-Sesudah Gempa
│   └── grafik.php        # Halaman Visualisasi Tren Gempa
├── index.php             # Halaman Utama (Definisi, Dampak, Gempa Terbesar)
└── detail.php            # Halaman detail per kejadian gempa (Ada video & foto)

---

## Tech Stack & Architecture

* **Backend / Core Engine:** PHP (Structured Framework / Native PHP)
* **Database Management:** MySQL (Relational Data Logging)
* **Frontend Interface:** HTML5, CSS3 (Custom Theme: Earth-Tones Palette), JavaScript
* **Data Visualization:** Chart.js Library
