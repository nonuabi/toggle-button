var firstClick = false;
$("#inner").on("click", function () {
  if (firstClick) {
    $("#inner").css({
      margin: "1px 0 0 1px",
    });
    $("h1").css("color", "black");
    $(":root").css("backgroundColor", "white");
    firstClick = false;
  } else {
    // blacktheme();
    $("#inner").css("marginLeft", "79px");
    $("h1").css("color", "white");
    $(":root").css("backgroundColor", "black");
    $("#outer").css("backgroundColor", "white");

    firstClick = true;
  }
});

// var togbtn = document.getElementById('inner')
// var para = document.getElementById('heading');
// var firstClick = false;

// togbtn.addEventListener('click', check);

// function check() {
// 	if(firstClick) {
// 		whitetheme();
// 		firstClick = false;
// 	} else {
// 		blacktheme();
// 		firstClick = true;
// 	}
// }

// function blacktheme() {
// 	para.style.color = "white";
// 	document.body.style.backgroundColor= "black";
// 	togbtn.style.marginLeft = "79px";
// 	document.getElementById('outer').style.backgroundColor = "white";
// }

// function whitetheme() {
// 	para.style.color = "black";
// 	togbtn.style.margin = "1px 0 0 1px";
// 	document.body.style.backgroundColor= "white";
// }
