// ==UserScript==
// @name           Seznam iFrame
// @description    Nahradi poznamky na Seznamu iframem s odkazem na vlastni html
// @namespace      https://greasyfork.org/en/users/98-jonnyrobbie
// @author         JonnyRobbie
// @include        /^https?:\/\/(www\.)?seznam\.cz\/.*$/
// @version        1.1
// ==/UserScript==

var url = ["https://htmlpreview.github.io/?https://raw.githubusercontent.com/jonnyrobbie/seznam_widgets/master/links.html", "https://htmlpreview.github.io/?https://raw.githubusercontent.com/jonnyrobbie/seznam_widgets/master/anime_seasonal_table.html", ""];
var size = [538, 333, 0];
window.scrIframes = {};
function main() {
	for (i=0;i<url.length;i++) {
		if (url[i] != "") {
			console.log("Seznam " + i);
			var note = document.getElementsByClassName("notes-list")[0].childNodes[i].childNodes[1];
			console.log("var " + i);
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

main();