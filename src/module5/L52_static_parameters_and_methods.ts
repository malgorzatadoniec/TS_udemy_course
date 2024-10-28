// LESSON 52 static methods and properties

// pozwala na dodawanie statycznych metod i właściwości do klas, od których dostęp nie jest uzyskiwany podczas instancji (new Klasa), tylko 
// dostajemy się do nich bezpośrednio na klasie, np klasa Math:

Math.PI

// możemy tego użyć w naszych klasach:

class AllDepartments {
    static fiscalYear = 2024;
    protected employees: string[] = [];                            

    constructor(private readonly id: number, public name: string){};

    static createEmploee(name: string){
        return {name: name};
    };

    depDescription() {
        console.log(`Dział ${this.id}: ${this.name}`);
    };

    addEmp(employee: string){
        this.employees.push(employee);
    };

    printInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    };
};

const employee1 = AllDepartments.createEmploee('Johnny');
console.log(employee1, AllDepartments.fiscalYear)

class ITDepartment extends AllDepartments {

    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    };
};

const it = new ITDepartment(1, ['Max']);


class AccountingDepartment extends AllDepartments {
    private lastReport: string;

    get mostRecentReport() {                                
        if(this.lastReport) {
            return this.lastReport;
        };
        throw new Error ('No report found')
    };

    set mostRecentReport(value: string) {                  
        if(!value){
            throw new Error('Pass in valid value')
        } 
        this.addReport(value);
    }

    constructor(id: number, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    };

    addEmp(name: string) {
        if (name === "Tom"){
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    } 

    printReports(){
        console.log(this.reports)
    }
};

const accDep = new AccountingDepartment(2, []);


accDep.depDescription();
accDep.addEmp('Tom');
accDep.addEmp('Lisa');
accDep.addEmp('Margo');
accDep.printInfo();
accDep.addReport('report1');
accDep.addReport('report2');

accDep.mostRecentReport = "Last report"

console.log(accDep.mostRecentReport);   

console.log(accDep);