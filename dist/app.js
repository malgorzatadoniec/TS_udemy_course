"use strict";
// LESSON 57 Interfaces with classes
;
class Person {
    constructor(n) {
        this.age = 18;
        this.name = n;
    }
    ;
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
;
let userOne;
userOne = new Person('John');
userOne.greet('Hi I am ');
console.log(userOne);
//# sourceMappingURL=app.js.map