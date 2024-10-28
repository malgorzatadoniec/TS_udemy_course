"use strict";
// LESSON 52 static methods and properties
// pozwala na dodawanie statycznych metod i właściwości do klas, od których dostęp nie jest uzyskiwany podczas instancji (new Klasa), tylko 
// dostajemy się do nich bezpośrednio na klasie, np klasa Math:
Math.PI;
// możemy tego użyć w naszych klasach:
class AllDepartments {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    ;
    static createEmploee(name) {
        return { name: name };
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
AllDepartments.fiscalYear = 2024;
;
const employee1 = AllDepartments.createEmploee('Johnny');
console.log(employee1, AllDepartments.fiscalYear);
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
class AccountingDepartment extends AllDepartments {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        ;
        throw new Error('No report found');
    }
    ;
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Pass in valid value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
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
        this.lastReport = text;
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
accDep.mostRecentReport = "Last report";
console.log(accDep.mostRecentReport);
console.log(accDep);
//# sourceMappingURL=L52_static_parameters_and_methods.js.map