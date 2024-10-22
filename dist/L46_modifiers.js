"use strict";
// LESSON 46 "private" and "public" Access Modifiers
class Dep {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describingDep() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Dep('Accounting');
accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Doe');
// moglibyśmy też dodać pracownika w inny sposób:
// accounting.employees[2] = "Anna Doe"   
// jednak w bardziej skomplikowanych aplikacjach chcemy uniknąć wielu sposobów dodawania wartości, trzeba się zabezpieczyć przed tym
// możemy się przed tym zabezpieczyć przez użycie modifiera private;
// dzięki temu accounting.employees[2] = "Anna Doe" wyrzuci błąd
// drugi modifier to "public", jest on domyślny (jak nie dodasz private, to domyślnie jest public i można do tej wartości lub metody dostać się spoza klasy)
// dlatego to zadziała:
accounting.name = "NEW NAME";
accounting.describingDep();
accounting.printEmployeeInfo();
// nie tylko properties mogą być zabezpieczone słówkiem "private", także metody
//# sourceMappingURL=L46_modifiers.js.map