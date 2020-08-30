//  Functions in JS

//  First way to write a function
function add(x, y) {
    return x + y;
}

addtest = add(3, 4);
console.log(addtest);

//  make sure you give your function a name
let add2 = function add2(x, y) {
    return x + y + 2;
}

console.log(add2(3,4));

//  anonymouse functions:
//  this function cannot be called unless it is called with params
(function (x, y) {
    return x + y;
});

console.log((function (x, y) {
    return x + y;
})(3,4));

let seven = (function (x,y) { return x + y})(3,4);

console.log(seven);


//  CLOSURES:

function adder(x) {
    return function adder2(y) {
        return x + y;
    }
}


let add4 = adder(4);

// storing y in add4 and then applying the value given to add4 previously as x
var result = add4(3);

console.log(result);


function dothing(x) {
    if (x < 0) {
    (function() {
        //  this will successfully change the variable inside the function and not bleed to the other outside function
        var x = 5;
        console.log(x);
    })();
}
    console.log(x);
}

console.log("x=23: " +dothing(23));
console.log("x=-5: "+ dothing(-23));