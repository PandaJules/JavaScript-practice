var x = document.getElementsByTagName("p");
document.getElementById("second").innerHTML = "The second paragraph is:<br>" + x[1].innerHTML + "<br>" 
document.getElementById("total").innerHTML = "There are " + x.length + " paragraphs, including this one";

var y = document.querySelectorAll("p.middle");
document.getElementById("query").innerHTML = 'The first paragraph with class="middle": ' + y[0].innerHTML;


function slide() {
  var elem = document.getElementById("block");  
  var cont = document.getElementById('container') 
  var top_pos = 0;
  var left_pos = 0
  var id = setInterval(frame, 1);
  function frame() {
	block_width = elem.offsetWidth;
	block_height = elem.offsetHeight;
	container_width = cont.offsetWidth;
	container_height = cont.offsetHeight;
    if (left_pos >= container_width-block_width) {
      clearInterval(id);
    } else {
      top_pos += 1; 
      left_pos += (container_width-block_width)/(container_height-block_height);
      elem.style.top = top_pos + 'px'; 
      elem.style.left = left_pos + 'px'; 
    }
  }
}

document.getElementById("slide").addEventListener("click", function(){
    alert("The block is about to slide!");
});

function mOver(obj) {obj.innerHTML = "No, get off me now!"}

function mOut(obj) {obj.innerHTML = "Thank you :)"}

function mDown(obj) {
    obj.style.backgroundColor = "red";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#009933";
    obj.innerHTML="Clicked!";
}

window.addEventListener("resize", function(){
    document.getElementById("size").innerHTML = "The window is now: " + window.innerWidth+"x"+window.innerHeight;
});