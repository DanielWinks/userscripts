// ==UserScript==
// @name         Fuck Pinterest
// @namespace    https://www.startpage.com
// @version      0.1
// @description  Fuck Pinterest
// @author       dwinks
// @match        https://www.startpage.com/*
// @grant        none
// @copyright    dwinks
// ==/UserScript==
/* jshint -W097 */
//'use strict';
 
var urlParams = new URLSearchParams(window.location.search);
if ((q = urlParams.get('q')) !== null && q.indexOf('pinterest') === -1) {
    urlParams.set('q', q + ' -site:pinterest.*');
    window.location.search = urlParams.toString();
}
