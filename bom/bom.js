document.getElementById("loc").innerHTML +=  "<br><b>location:</b>  " + window.location + 
                                          "<br><b>pathname:</b>  " + window.location.pathname + 
                                          "<br><b>protocol:</b>  " + window.location.protocol +
                                          "<br><b>port:</b>  " + window.location.port;

function google() {
    window.location.assign("https://www.google.com")
}

function confirmMe() {
    var txt;
    if (confirm("Choose a button") == true) {
        txt = "I know what you pressed! You pressed <span style='color:red'>OK</span>!";
    } else {
        txt = "I know what you pressed! You pressed <span style='color:blue'>Cancel!</span>";
    }
    document.getElementById("confirm").innerHTML = txt;
}

function greetMe() {
    var txt;
    var person = prompt("Please enter your name:", "John Doe");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello <span style='color:red'>" + person + "</span>! Welcome to this website. Are you doing okay?";
    }
    document.getElementById("greet").innerHTML = txt;
}