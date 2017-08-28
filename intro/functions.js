function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

heights = sumAll(168, 169, 169, 173, 185, 188);
weights = sumAll(50, 51, 60, 60, 74);

function findMax() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
} 

max_score = findMax(97, 97.5, 93, 91, 98, 100, 99.5, 83)

function person(name, surname) {
    this.firstName = name;
    this.lastName  = surname;
}

var president = new person("Barack","Obama");
var who = president.firstName + " " + president.lastName; // Function is really an object with fields

var myUniversity = {
    city:"Cambridge",
    course: "Computer Science",
    fullName: function() {
        return this.course + " in " + this.city;
    }
}
var friendsUni = {
    city:"London",
    course: "Economics"
}
var x = myUniversity.fullName.call(friendsUni); // returns Economics in London
var y = myUniversity.fullName(friendsUni); //returns Computer Science in Cambridge, ignores the parameter
//The apply() method is similar to call(), but uses an array instead of an argument list.
