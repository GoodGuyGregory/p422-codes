function MathLib(pi) {
    this.pi = pi;
}

// adds the times2 method to the objects 
MathLib.prototype.times2 = function times2(x) {
    return x*2;
}
// creates a prototype of the mylib
let m = new MathLib(3.14);

console.log(m.pi);

console.log("Testing times2 method...");

console.log(m.times2(2));