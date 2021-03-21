var onOff = true;
var btn = document.getElementById('togglebtn');

function on() {
	btn.style.background = "red";
	onOff = true;
	
}

function off() {
	btn.style.background = "cyan";
	onOff = false;
}

function check(event) {
	if(event) {
		off();
	} else {
		on();
	}
	console.log(onOff);
}

btn.addEventListener('onclick', check(onOff));
