"use strict";
// LESSON 54 singletons and private constructors
// singelton pattern: służy zapewnieniu tego, że zawsze masz tylko jedną instancję danej klasy (jeden obiekt oparty na danej klasie)
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
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        ;
        this.instance = new AccountingDepartment(2, []);
        return this.instance;
    }
    ;
    describe() {
        console.log('Accounting Department id: ' + this.id);
    }
    ;
    addEmp(name) {
        if (name === "Tom") {
            return;
        }
        this.employees.push(name);
    }
    ;
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    ;
    printReports() {
        console.log(this.reports);
    }
    ;
}
;
// const accDep = new AccountingDepartment(2, []);    // wtedy to wyrzuca error,bo nie możemy dostawać się do klasy z zewnątrz
// na pomoc przychodzą "static methods"
const acc = AccountingDepartment.getInstance();
const acc2 = AccountingDepartment.getInstance();
console.log(acc, acc2);
//# sourceMappingURL=L54_singelton_pattern_and_private_constructors.js.map