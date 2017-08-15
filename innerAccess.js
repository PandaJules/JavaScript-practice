var x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("demo2").innerHTML = "x + y = " + z;
document.getElementById("demo2").style.fontSize = "30px";
document.getElementById("demo2").style.color = "#0000FF";

var text = '{"siblings":[' +
'{"firstName":"Kate","lastName":"Clarke" },' +
'{"firstName":"Anna","lastName":"Jones-Clarke" },' +
'{"firstName":"Josh","lastName":"Clarke" }]}';

obj = JSON.parse(text);
document.getElementById("json").innerHTML = "Accessing json as an array: " + obj.siblings[1].firstName + " " + obj.siblings[1].lastName;