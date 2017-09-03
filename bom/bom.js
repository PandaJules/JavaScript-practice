document.getElementById("loc").innerHTML +=  "<br><b>location:</b>  " + window.location + 
                                          "<br><b>pathname:</b>  " + window.location.pathname + 
                                          "<br><b>protocol:</b>  " + window.location.protocol +
                                          "<br><b>port:</b>  " + window.location.port;

function google() {
    window.location.assign("https://www.google.com")
}