// ==UserScript==
// @name           Seznam iFrame
// @description    Nahradi poznamky na Seznamu iframem s odkazem na vlastni html
// @namespace      https://greasyfork.org/en/users/98-jonnyrobbie
// @author         JonnyRobbie
// @include        /^https?:\/\/(www\.)?seznam\.cz\/.*$/
// @version        1.2.1
// @grant          none
// ==/UserScript==

var url = ["https://htmlpreview.github.io/?https://raw.githubusercontent.com/jonnyrobbie/seznam_widgets/master/links.html", "https://htmlpreview.github.io/?https://raw.githubusercontent.com/jonnyrobbie/seznam_widgets/master/anime_seasonal_table.html", ""];
var size = [538, 367, 0];
window.scrIframes = {};
var timer = 0;

function replaceNotes() {
	for (i=0;i<url.length;i++) {
		if (url[i] != "") {
			var note = document.getElementsByClassName("notes-list")[0].childNodes[i].childNodes[1];
			console.log("Frame " + i + ": " + url[i]);
			scrIframes[i] = new Object
			scrIframes[i] = document.createElement("iframe");
			scrIframes[i].src = url[i];
			scrIframes[i].style.border = "none";
			scrIframes[i].style.height = size[i] + "px";
			scrIframes[i].style.width = "100%";
			note.innerHTML = "";
			note.appendChild(scrIframes[i]);
		}
	}
}

function testNote() {
	var note = document.getElementsByClassName("notes-list")[0].childNodes[0].childNodes[1];
	if (note == null) {
		console.log("Note not found. Repeating...");
	} else {
		clearInterval(timer);
		console.log("Note found. Rendering iframes...");
		replaceNotes();
	}
}

function main() {
	console.log("Seznam iframe widgets loading...");
	timer = setInterval(function() {testNote();}, 100);
}

main();
