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

function showMenu()
{
    if (!isMenuOut) {
        f_container.style.display = "block";
        isMenuOut = true;
        showMenuButton.textContent = "Menu>";
        showMenuButton.style.right = "260px";
        backButton.style.right = "260px";
    } else {
        f_container.style.display = "none";
        isMenuOut = false;
        showMenuButton.textContent = "Menu<";
        showMenuButton.style.right = "30px";
        backButton.style.right = "30px";
    }
}

function scrollUp() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
        showMenuButton.style.display = "block";
    } else {
        backButton.style.display = "none";
        showMenuButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// showMenuButton setup
var showMenuButton = document.createElement("button");
showMenuButton.type = "button";
showMenuButton.textContent = "Menu<";
showMenuButton.setAttribute("id", "test");
showMenuButton.onclick = showMenu;
document.body.appendChild(showMenuButton);

var tocElement = document.getElementsByClassName("panel expanded PanelsDocumentationLinks DocumentationLinks");
var menu = tocElement[0].cloneNode(true);

// setup floating container
var f_container = document.createElement("div");
f_container.setAttribute('id', 'f_container');
f_container.setAttribute('class', 'f_container');
document.body.appendChild(f_container)

document.getElementById('f_container').appendChild(menu);
document.getElementById('f_container').style.width = "250px";

var isMenuOut = false;

// backButton setup
var backButton = document.createElement("button");
backButton.type = "button";
backButton.textContent = "Top"
backButton.onclick = topFunction;
backButton.setAttribute("id", "myBtn");
document.body.appendChild(backButton);

window.onscroll = function() {scrollUp()};

GM_addStyle (`
    .f_container {
        display: none;
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #FFF;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    @media screen and (max-height: 450px) {
    .f_container {padding-top: 15px;}
    }

    #test {
        display: none; /* Hidden by default */
        position: fixed; /* Fixed/sticky position */
        bottom: 50%; /* Place the button at the bottom of the page */
        right: 30px; /* Place the button 30px from the right */
        z-index: 99; /* Make sure it does not overlap */
        border: none; /* Remove borders */
        outline: none; /* Remove outline */
        background-color: red; /* Set a background color */
        color: white; /* Text color */
        cursor: pointer; /* Add a mouse pointer on hover */
        padding: 15px; /* Some padding */
        border-radius: 10px; /* Rounded corners */
        font-size: 18px; /* Increase font size */
    }

    #myBtn {
        display: none; /* Hidden by default */
        position: fixed; /* Fixed/sticky position */
        bottom: 20px; /* Place the button at the bottom of the page */
        right: 30px; /* Place the button 30px from the right */
        z-index: 99; /* Make sure it does not overlap */
        border: none; /* Remove borders */
        outline: none; /* Remove outline */
        background-color: red; /* Set a background color */
        color: white; /* Text color */
        cursor: pointer; /* Add a mouse pointer on hover */
        padding: 15px; /* Some padding */
        border-radius: 10px; /* Rounded corners */
        font-size: 18px; /* Increase font size */
    }

    #myBtn:hover {
        background-color: #555; /* Add a dark-grey background on hover */
    }
`);
