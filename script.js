var togbtn = document.getElementById('inner')
var para = document.getElementById('heading');
var firstClick = false;


togbtn.addEventListener('click', check);

function check() {
	if(firstClick) {
		whitetheme();
		firstClick = false;
	} else {
		blacktheme();
		firstClick = true;
	}
}

function blacktheme() {
	para.style.color = "white";
	document.body.style.backgroundColor= "black";
	togbtn.style.marginLeft = "79px";
	document.getElementById('outer').style.backgroundColor = "white";
}

function whitetheme() {
	para.style.color = "black";
	togbtn.style.margin = "1px 0 0 1px";
	document.body.style.backgroundColor= "white";
}