let menuBool = false;

function menuClose() {
	if (menuBool) {
		menuOff();
	}
}

function menuOff() {
	document.getElementById('menuButton').textContent = "≡";
	document.getElementById('menuBg').style.animation = "menuOffBg 0.5s ease 0s 1 normal both";
	document.getElementById('menuBox').style.animation = "menuOffText 0.5s ease 0s 1 normal both";
	document.getElementById('menuBtmShadow').style.animation = "menuOffShadow 1s ease 0s 1 normal both";
	menuBool = false;
}

function menuOn() {
	document.getElementById('menuButton').textContent = "×";
	document.getElementById('menuBg').style.animation = "menuOnBg 1s ease 0s 1 normal both";
	document.getElementById('menuBox').style.animation = "menuOnText 1.5s ease 0s 1 normal both";
	document.getElementById('menuBtmShadow').style.animation = "menuOnShadow 1s ease 0s 1 normal both";
	menuBool = true;
}

function menuToggle() {
	if (menuBool) {
		menuOff();
	} else {
		menuOn();
	}
}

function onOpen() {
	document.getElementById('header').style.animation = "openingTitle 1.2s ease 0s 1 normal both";	
	document.getElementById('bgpic').style.animation = "lightUp 0.5s ease 0s 1 normal both";	
}