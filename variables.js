var whatisit;
var welcome = "Welcome" + ", " + "Julia"
document.getElementById("undef").innerHTML = whatisit;
document.getElementById("undef").style.color = "red";
document.getElementById("str").innerHTML = welcome;
document.getElementById("str").style.color = "green";
var x = 2 + 3 + "5"
var y = "3" + 2 + 3 
document.getElementById("concat1").innerHTML = x;
document.getElementById("concat2").innerHTML = y;
var person = {
    firstName: "Julia",
    lastName : "Roberts",
    id       :  1355,
    age		 :  50,
    fullName : function() {return this.firstName + " " + this.lastName;}
};
document.getElementById("obj").innerHTML = "Name is: " + person.firstName + "<br>" + "Surname is: " + person["lastName"] + "<br>" + "Age is: " + person.age;
document.getElementById("typ").innerHTML = "Types are: " + typeof(5) + " " + typeof(" ") + " " + typeof(und) + " " + typeof(true) + " " + null ;

var names = ["James", "Matt", "Alice", "Kate"];
document.getElementById("arrays").innerHTML = names.join(", ");;

function displayNames() {
    names.push("Julia");
    document.getElementById("arrays").innerHTML = names.join(", ");;
}
