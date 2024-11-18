"use strict";
// LESSON 60 extending interfaces
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
//# sourceMappingURL=L60_extending_interfaces.js.map