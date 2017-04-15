// ==UserScript==
// @name         Aladin rightclickfinder
// @namespace    http://csillagtura.ro
// @version      0.1
// @description  adds "identify object by right click" functionality to the aladin skyview
// @author       You
// @match        http://simbad.u-strasbg.fr/simbad/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var root = document.getElementById("aladin-lite-div");
    root.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        var loc = root.getElementsByClassName("aladin-location-text")[0];
        var koord = loc.innerHTML.trim();
        document.location = "/simbad/sim-coo?Coord="+encodeURIComponent(koord)+"&CooFrame=FK5&CooEpoch=2000&CooEqui=2000&CooDefinedFrames=none&Radius=2&Radius.unit=arcmin&submit=submit+query&CoordList=";
        return false;
    }, false);
})();