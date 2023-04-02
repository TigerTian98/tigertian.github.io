let bioBool = false;
let menuBool = false;

function bioOff() {
	document.getElementById('bio').style.animation = "bioOff 0.5s ease 0s 1 normal both";
	document.getElementById('homeButton').style.animation = "bioOffHB 1.5s ease 0s 1 normal both";
	bioBool = false;
}

function bioOn() {
	document.getElementById('bio').style.animation = "bioOn 1.5s ease 0s 1 normal both";
	document.getElementById('homeButton').style.animation = "bioOnHB 1.5s ease 0s 1 normal both";
	bioBool = true;
}

function bioToggle() {
	if (bioBool) {
		bioOff();
	} else {
		bioOn();
	}
}

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
	if(bioBool){
		bioOff();
	}
	
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
	document.getElementById('homeButton').style.animation = "homeButtonDrop 2.5s ease 0s 1 normal both";
	document.getElementById('header').style.animation = "openingTitle 3s ease 0s 1 normal both";	
	document.getElementById('bgpic').style.animation = "lightUp 2s ease 0s 1 normal both";	
}