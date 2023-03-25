let menuBool = false;

function menuToggle(){
	if (menuBool) {
		document.getElementById('menu').style.display = "none";
		document.getElementById('menuButton').textContent = "≡";
	} else {
		document.getElementById('menu').style.display = "block";
		document.getElementById('menuButton').textContent = "×";
	}
	menuBool = !menuBool;
}