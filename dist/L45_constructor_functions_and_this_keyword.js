"use strict";
// LESSON 45 constructor functions and "this" keyword
// w konstruktorze mogą być zawarte także metody
class Departments {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const acc = new Departments('Accounting');
acc.describe();
const accCopy = { name: 'DUMMY', describe: acc.describe };
accCopy.describe();
//# sourceMappingURL=L45_constructor_functions_and_this_keyword.js.map