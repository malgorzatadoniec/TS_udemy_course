"use strict";
// LESSON 56 INTERFACES
;
let userOne;
userOne = {
    name: "Ania",
    age: 20,
    greet(phrase) {
        console.log(phrase + ' ' + this.name + '!');
    }
};
userOne.greet('Hello');
//# sourceMappingURL=L56_interfaces.js.map