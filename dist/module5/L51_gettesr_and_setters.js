"use strict";
// LESSON 51 getters and setters
class AllDepartments {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
class AccountingDepartment extends AllDepartments {
    get mostRecentReport() {
        // nawet jeśli ona jest "private"
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
// accDep.mostRecentReport = '';                        // używając settera możemy ustawić wartość - tu zwróci błąd
// console.log(accDep.mostRecentReport);              // używając mostRecentReport wchodzimy w if na początku, ponieważ jeszcze nie ma raportu, więc
// dostajemy error
accDep.depDescription();
accDep.addEmp('Tom');
accDep.addEmp('Lisa');
accDep.addEmp('Margo');
accDep.printInfo();
accDep.addReport('report1');
accDep.addReport('report2');
accDep.mostRecentReport = "Last report";
console.log(accDep.mostRecentReport); // tu już nie ma errora, bo mamy dodane raporty i pokazyje nam ostatni raport
console.log(accDep);
//# sourceMappingURL=L51_gettesr_and_setters.js.map