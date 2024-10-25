"use strict";
// LESSON 50 overriding properties and "protected" modifier
// można także nadpisać metody i własności klasy nadrzędnej
class AllDepartments {
    // dostępna w dziedziczonych klasach! zob. przykład w klasie AccountingDepartament
    // można sobie z tym poradzić dzięki "protected" - wtedy wciąż nie będzie można manipulować
    // tą wartością poza klasami, ale będzie dostępna w klasach dziedziczonych
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // uwaga! wartość oznaczona "private" jest dostępna tylko ze swojej klasy, nie jest
    }
    ;
    depDescription() {
        console.log(`Dział ${this.id}: ${this.name}`);
    }
    ;
    addEmp(employee) {
        this.employees.push(employee);
    }
    ;
    printInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    ;
}
;
class ITDepartment extends AllDepartments {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    ;
}
;
const it = new ITDepartment(1, ['Max']);
it.depDescription();
it.addEmp('John');
it.addEmp('Lola');
it.printInfo();
console.log(it);
class AccountingDepartment extends AllDepartments {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
    }
    ;
    addEmp(name) {
        if (name === "Tom") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
;
const accDep = new AccountingDepartment(2, []);
accDep.depDescription();
accDep.addEmp('Tom');
accDep.addEmp('Lisa');
accDep.addEmp('Margo');
accDep.printInfo();
accDep.addReport('report1');
accDep.addReport('report2');
console.log(accDep);
//# sourceMappingURL=L50_overriding_properties_and_protected_modifier.js.map