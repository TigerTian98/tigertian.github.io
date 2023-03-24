let menuBool = false;

function menuToggle(){
	if (menuBool) {
		document.getElementById('menu').style.display = "none";
		document.getElementById('navi').textContent = "...";
	} else {
		document.getElementById('menu').style.display = "block";
		document.getElementById('navi').textContent = "×";
	}
	menuBool = !menuBool;
}