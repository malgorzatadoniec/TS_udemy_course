"use strict";
// LESSON 62 optional parameters and properties
;
class Person {
    constructor(n) {
        this.age = 18;
        if (n) {
            this.name = n;
        }
    }
    ;
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
;
let userOne;
userOne = new Person();
userOne.greet('Hi I am ');
console.log(userOne);
//# sourceMappingURL=app.js.map