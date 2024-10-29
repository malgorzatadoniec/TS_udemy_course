// LESSON 53 abstract classes

// jeśleli chcemy wymusić, żeby w każdej nowej klasie opartej na bazowej klasie była jakaś metoda, ale wiemy, że będzie ona musiała być specyficzna
// dla danej klasy opartej na bazowej, to wtedy możemy użyć 
// wtedy w bazowej klasie tworzymy pustą metodę, która będzie wykorzystywana w innych, opartych na niej i w każdej z nich implementowana na jej
// właściwy sposób

// ważne! klasa oznaczona jako "abstract" nie może być instancjowana (new NazwaKlasy), może być tylko dziedziczona!

abstract class AllDepartments {                          // dodajemy słówko "abstract" tu 
    static fiscalYear = 2024;
    protected employees: string[] = [];                            

    constructor(protected readonly id: number, public name: string){};

    static createEmploee(name: string){
        return {name: name};
    };

    abstract describe(this: AllDepartments): void;                         // i tutaj; określamy jak powinna wyglądać ta metoda

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

    describe(){
        console.log('IT Department id: ' + this.id)
    }
};

const it = new ITDepartment(1, ['Max']);
it.describe();


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

    describe() {
        console.log('Accounting Department id: ' + this.id);
        
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

accDep.describe();



