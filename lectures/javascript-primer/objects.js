function MyMath(pi) {
    this.pi = pi;
}

//  Methods for the MyMath 
MyMath.prototype = {
    add: function add(x,y) {
        return x + y;
    },
    times2: function times2(x) {
        return x * 2;
    },
    area: function area(r) {
        //  allows for a refence to this in the object
        let self = this;
        return function() {
            //  note that nesting functions can cause issues with scope of the calling object
            var result =  self.times2(self.pi * r);
            return result;
        }();
    }
}

let m = new MyMath(3.14)

console.log(m.pi);

console.log(m.area(9));