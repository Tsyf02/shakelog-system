<?php require __DIR__.'/config.php'; ?><!doctype html>
<html lang="id" data-theme="light"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>shakelog-system</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600&family=Young+Serif&display=swap" rel="stylesheet">
<link href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" rel="stylesheet">
<link href="assets/style.css" rel="stylesheet"></head><body>
<header class="top"><a class="brand" href="#top"><svg viewBox="0 0 48 16" width="48" height="16" aria-hidden="true"><polyline points="0,8 8,8 10,2 13,14 16,5 19,11 22,8 48,8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><span data-i="brand"></span></a>

<nav><a href="#peta" data-i="n_map"></a><a href="#belajar" data-i="n_learn"></a><a href="#terkini" data-i="n_live"></a><a href="#berita" data-i="n_news"></a><a href="#komunitas" data-i="n_comm"></a></nav>
<div class="tools"><button id="lang" aria-label="Language">ID / EN</button><button id="theme" data-i="theme"></button></div></header>
<main id="top">
<section class="hero"><h1 data-i="h1"></h1><p data-i="h1p"></p>
<div class="srcs"><a href="https://www.bmkg.go.id/gempabumi" target="_blank" rel="noopener">BMKG</a><a href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener">USGS</a><a href="https://www.emsc.eu/" target="_blank" rel="noopener">EMSC</a></div></section>

<section id="peta"><h2 data-i="n_map"></h2>
<div class="mapwrap"><div id="map" role="application" aria-label="Peta"></div>
<aside id="panel"><p data-i="pick"></p><div id="chips"></div><div id="info"></div></aside></div>
<p class="note" data-i="mapnote"></p></section>

<section id="belajar"><h2 data-i="n_learn"></h2><div id="tabs" role="tablist"></div><article id="tabbody"></article></section>

<section id="terkini"><h2 data-i="n_live"></h2>
<div class="row"><div><h3 data-i="latest"></h3><div id="auto" class="card"></div></div>
<div><h3 data-i="gear"></h3><p data-i="gearp"></p>
<div class="links"><a class="btn" href="https://www.bmkg.go.id/gempabumi" target="_blank" rel="noopener" data-i="open_bmkg"></a><a class="btn" href="https://www.bmkg.go.id/gempabumi/gempabumi-terkini" target="_blank" rel="noopener" data-i="open_list"></a><a class="btn" href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener">USGS Map</a><a class="btn" href="https://www.emsc.eu/" target="_blank" rel="noopener">EMSC</a></div></div></div>
<h3 data-i="tbl"></h3><div class="scroll"><table id="tbl"><thead><tr><th data-i="c_time"></th><th>M</th><th data-i="c_depth"></th><th data-i="c_place"></th></tr></thead><tbody></tbody></table></div></section>

<section id="berita"><h2 data-i="n_news"></h2><div id="news" class="newsgrid"></div></section>

<section id="komunitas"><h2 data-i="n_comm"></h2><div class="row">
<form id="pf"><h3 data-i="share"></h3>
<input name="author" maxlength="60" required data-ph="f_name"><select name="region_id" id="rsel"></select>
<input name="title" maxlength="120" required data-ph="f_title"><textarea name="body" rows="5" maxlength="2000" required data-ph="f_body"></textarea>
<button class="btn" data-i="send"></button><p id="msg" role="status"></p></form>
<div><h3 data-i="reports"></h3><div id="posts"></div></div></div></section>
</main>
<footer><h2 data-i="team"></h2><div class="devs">
<?php foreach(DEVELOPERS as $d): ?><div class="dev"><strong><?=htmlspecialchars($d['name'])?></strong><span><?=htmlspecialchars($d['nim'])?></span><em><?=htmlspecialchars($d['role'])?></em>
<a href="<?=htmlspecialchars($d['github'])?>" target="_blank" rel="noopener" aria-label="GitHub <?=htmlspecialchars($d['name'])?>"><svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a></div>
<?php endforeach; ?></div>
<p class="small" data-i="credit"></p><p class="small"> SHAKELOG "Seismic Monitoring & Operational System" © 2026. Created for educational purposes.</p></footer>
<script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
<script src="assets/app.js"></script></body></html>
