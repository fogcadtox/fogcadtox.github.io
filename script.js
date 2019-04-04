"use strict";
{

function FullScreen()
{
	if (document.fullscreenElement) {
		document.exitFullscreen();
			BigScreen.classList.remove("hidden");
			SmallScreen.classList.add("hidden");
	} else {
		document.documentElement.requestFullscreen();
			BigScreen.classList.add("hidden");
			SmallScreen.classList.remove("hidden");
	}
}

var BigScreen = document.getElementById("fullscreen");
BigScreen.addEventListener("click", FullScreen, false);

var SmallScreen = document.getElementById("closescreen");
SmallScreen.addEventListener("click", FullScreen, false);

function PageBack() {
	window.history.back();
}

var CloseButton = document.getElementById("closebutton");
CloseButton.addEventListener("click", PageBack, false);


function ContentHidden() {
	if (ContentView.classList.contains("visible")) {
		ContentView.classList.remove("visible");
	} else {
		ContentView.classList.add("visible");
	}
}

var ContentView = document.getElementById("content");

var ViewSwitch = document.getElementById("minimization");
ViewSwitch.addEventListener("click", ContentHidden, false);

}