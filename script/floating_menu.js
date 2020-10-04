// ==UserScript==
// @name            Greasemonkey Script Name
// @author          Howard
// @namespace       www.google.com
// @description     Put a good description in here
// @license         Creative Commons Attribution License
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version	        0.1
// @grant           GM_addStyle
// @include         *
// ==/UserScript==


var input=document.createElement("input");
input.type="button";
input.value="GreaseMonkey Button";
input.onclick = showAlert;
input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
document.body.appendChild(input);

var menu = document.getElementsByClassName("panel expanded PanelsUserGuide UserGuide");

var f_container = document.createElement("div");
f_container.setAttribute('id', 'f_container');
document.body.appendChild(f_container)

function showAlert()
{
    document.getElementById('f_container').appendChild(menu[0]);
    alert("Hello World");
}
