// LESSON 54 singletons and private constructors

// singelton pattern: służy zapewnieniu tego, że zawsze masz tylko jedną instancję danej klasy (jeden obiekt oparty na danej klasie)

abstract class AllDepartments {                          
    static fiscalYear = 2024;
    protected employees: string[] = [];                            

    constructor(protected readonly id: number, public name: string){};

    static createEmploee(name: string){
        return {name: name};
    };

    abstract describe(this: AllDepartments): void;                        

    addEmp(employee: string){
        this.employees.push(employee);
    };

    printInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    };
};


class AccountingDepartment extends AllDepartments {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: number, private reports: string[]){   // dodanie private przed konstruktorem, zapewnia, że może być tylko jedna instancja tej klasy
        super(id, 'Accounting');
        this.lastReport = reports[0];
    };

    static getInstance(){                                     // dzięki temu tworzymy instancję klasy w jej wnętrzu (omijamy private)
        if(this.instance){
            return this.instance;
        };
        this.instance = new AccountingDepartment(2, []);
        return this.instance;
    };

    describe() {
        console.log('Accounting Department id: ' + this.id);
        
    };

    addEmp(name: string) {
        if (name === "Tom"){
            return
        }
        this.employees.push(name)
    };

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    };

    printReports(){
        console.log(this.reports);
    };
};

// const accDep = new AccountingDepartment(2, []);    // wtedy to wyrzuca error,bo nie możemy dostawać się do klasy z zewnątrz
// na pomoc przychodzą "static methods"

const acc = AccountingDepartment.getInstance();
const acc2 = AccountingDepartment.getInstance();

console.log(acc, acc2);

