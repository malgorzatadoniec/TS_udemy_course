"use strict";
// LESSON 53 abstract classes
// jeśleli chcemy wymusić, żeby w każdej nowej klasie opartej na bazowej klasie była jakaś metoda, ale wiemy, że będzie ona musiała być specyficzna
// dla danej klasy opartej na bazowej, to wtedy możemy użyć 
// wtedy w bazowej klasie tworzymy pustą metodę, która będzie wykorzystywana w innych, opartych na niej i w każdej z nich implementowana na jej
// właściwy sposób
// ważne! klasa oznaczona jako "abstract" nie może być instancjowana (new NazwaKlasy), może być tylko dziedziczona!
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
class ITDepartment extends AllDepartments {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    ;
    describe() {
        console.log('IT Department id: ' + this.id);
    }
}
;
const it = new ITDepartment(1, ['Max']);
it.describe();
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
accDep.describe();
//# sourceMappingURL=L53_abstract_classes.js.map