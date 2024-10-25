// LESSON 51 getters and setters

class AllDepartments {
    protected employees: string[] = [];                            

    constructor(private readonly id: number, public name: string){};

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


class ITDepartment extends AllDepartments {

    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    };
};

const it = new ITDepartment(1, ['Max']);


class AccountingDepartment extends AllDepartments {
    private lastReport: string;

    get mostRecentReport() {                                //getter - pozwala "dostać się" do, odczytać jakąć właściwość poza klasą, 
                                                            // nawet jeśli ona jest "private"
        if(this.lastReport) {
            return this.lastReport;
        };
        throw new Error ('No report found')
    };

    set mostRecentReport(value: string) {                   // setter pozwala ustawić jakąś wartość spoza klasy, nawet jeśli jest ona "private"
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

accDep.mostRecentReport = "Last report"

console.log(accDep.mostRecentReport);   // tu już nie ma errora, bo mamy dodane raporty i pokazyje nam ostatni raport

console.log(accDep);