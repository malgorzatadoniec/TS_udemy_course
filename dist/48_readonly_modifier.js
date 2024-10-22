"use strict";
// LESSON 48 "readonly" properties
// kolejny modifier - readonly
// powiedzmy, że mamy pewne pola, które nie tylko powinny być public lub private, ale też nie powinny się zmieniać po inicjalizacji, np id
// po dodaniu readonly nie możemy modyfikować tej wartości, po tym, jak ją po raz pierwszy dodamy - co jest dobre np dla id:
class Dep3 {
    constructor(id, name) {
        // this.id = id;
        // this.name = n;
        this.id = id;
        this.name = name;
        // private readonly id: number;
        // private name: string;
        this.employees = [];
    }
    describingDep3() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee3(employee) {
        // this.id = 2                      // tu dzięki readonly wyskoczy błąd
        this.employees.push(employee);
    }
    printEmployeeInfo3() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting3 = new Dep3(1, 'Accounting');
accounting3.addEmployee3('Tom Hanks');
accounting3.addEmployee3('Angelina Jolie');
accounting3.describingDep3();
accounting3.printEmployeeInfo3();
//# sourceMappingURL=48_readonly_modifier.js.map