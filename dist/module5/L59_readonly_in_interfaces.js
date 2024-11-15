"use strict";
// LESSON 59 readonly interface properties 
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
// userOne.name = "Johnny"    // tu wyrzuci error, bo ustawiliśmy readonly w interfejsie
userOne.greet('Hi I am ');
console.log(userOne);
//# sourceMappingURL=L59_readonly_in_interfaces.js.map