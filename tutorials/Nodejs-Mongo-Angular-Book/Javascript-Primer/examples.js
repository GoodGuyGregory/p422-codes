// Defining Variables:
var myData;
var myString = "Some Text";
var myString;
myString = "Some More Text";

let aString = " Here is some Text";
let concatString = aString + myString;

console.log(concatString);

// Do While Loops
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var i = 0;
do {
    var day = days[i++];
    console.log("Today is a " + day);
} while (day != "Friday");

// For Each or For I in Loops
let bands = ["Daft Punk", "Gorillaz", "Khurangbin", "Maribu State", "Unknown Mortal Orchestra"];
console.log("Here are the bands I like:");
for (var i in bands) {
    console.log("* " + bands[i]);
}

// ProtoTyping Methods:
// Creates functions only once when the JS has loaded, 
// instead of each time a new object is created

function Users(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Users.prototype = {
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};