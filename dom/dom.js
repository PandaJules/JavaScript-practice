var x = document.getElementsByTagName("p");
document.getElementById("second").innerHTML = "The second paragraph is:<br>" + x[1].innerHTML + "<br>" 
document.getElementById("total").innerHTML = "There are " + x.length + " paragraphs, including this one";

var y = document.querySelectorAll("p.middle");
document.getElementById("query").innerHTML = 'The first paragraph with class="middle": ' + x[0].innerHTML;