!function e(r,o,t){function n(i,l){if(!o[i]){if(!r[i]){var c="function"==typeof require&&require;if(!l&&c)return c(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var s=o[i]={exports:{}};r[i][0].call(s.exports,function(e){var o=r[i][1][e];return n(o||e)},s,s.exports,e,r,o,t)}return o[i].exports}for(var a="function"==typeof require&&require,i=0;i<t.length;i++)n(t[i]);return n}({1:[function(e,r,o){d3.json("./data/locations.json",function(e,r){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze",center:[-93.224546,44.976525],zoom:11,minZoom:3});o.addControl(new mapboxgl.NavigationControl),o.scrollZoom.disable(),o.on("load",function(){o.addSource("locations",{type:"geojson",data:r}),o.addLayer({id:"dots-layer-central",type:"circle",source:"locations",filter:["==","street","central"],paint:{"circle-color":"rgb(22, 110, 118)","circle-radius":5.5}}),o.addLayer({id:"dots-layer-university",type:"circle",source:"locations",filter:["==","street","university"],paint:{"circle-color":"rgba(194,42,34, 1)","circle-radius":5.5}}),o.addLayer({id:"dots-layer-nicollet",type:"circle",source:"locations",filter:["==","street","nicollet"],paint:{"circle-color":"rgb(26, 150, 41)","circle-radius":5.5}});var e=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});o.on("mousemove",function(r){var t=o.queryRenderedFeatures(r.point,{layers:["dots-layer-central","dots-layer-nicollet","dots-layer-university"]});if(o.getCanvas().style.cursor=t.length?"pointer":"",!t.length)return void e.remove();var n=t[0];e.setLngLat(r.lngLat).setHTML(n.properties.name).addTo(o)})})})},{}]},{},[1]);