var x = 10;
var y = 20;
document.getElementById("xy").innerHTML ="X is: "+x+"<br>"+"Y is: "+y;
document.getElementById("result1").innerHTML = "sum" + x + y;
document.getElementById("result2").innerHTML = "sum" + (x + y);
var z = "30";
document.getElementById("z").innerHTML ="Z is: \""+ z + "\"";
document.getElementById("result3").innerHTML = x + y + z;

function showDate(button) {
	document.getElementById("date").innerHTML = new Date().toDateString();
	button.style.visibility = "hidden";
}