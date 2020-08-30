// Test
let hello = 'Hello World!';
console.log(hello);

function foo(bar) {
    var x = bar + " hahahaha";
    console.log(x);
}

let x = 3;
foo("hello")
console.log(x);

//  Types in JS
var num1 = 3;
var num2 = 3.14;

var str = "hello";
var str2 = "hello";

var bool1 = true;
var bool2 = false;

//  expliticily declared as null
var nullvar = null;
//  undeclared variables are considered undefined
var undef = undefined;

//  Objects: key value pairs,   
var obj = {
    key: "value",
    key1: false,
    key3: function(x) {
        return x + 2;
    }
}

console.log(obj.key);
console.log(obj.key3(4));


//  typeof allows for you to determine the type of an element/var in JS
// important to note objects are treated as prototypical enheritance
// they can have object properties and their own functions but they are not
//  treated as classes by the language
console.log(typeof obj );

//  should display a number
console.log(typeof num2);