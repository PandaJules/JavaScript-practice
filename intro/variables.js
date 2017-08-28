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

function displayList() {
	var all_info = "<ul>";
	var myPet = {name:"Luna", species:"cat", age:8, children:"no kitties", color:"ginger"}; 
	var trait;
	for (trait in myPet) {
	    all_info += "<li>" + myPet[trait] + "</li>";
	}
	document.getElementById("pet").innerHTML = "All information about my pet: " + all_info + "</ul>";
	var button = document.getElementById('pet_button');
    button.parentNode.removeChild(button);
}

function Student(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

Student.prototype.setName = function (name) {this.firstName = name;}
var newbie = new Student("Jake","Simons",19,"green");
document.getElementById("student").innerHTML = "New student is: " + newbie.firstName + " " + newbie.lastName;

function changeName() {
	newbie.setName("WhatIsMyName");
	document.getElementById("student").innerHTML = "New student is: " + "<b><em>" + newbie.firstName + "</b></em>" + " " + newbie.lastName;

}


