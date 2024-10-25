// LESSON 49 Inheritance

// w przypadkach, kiedy chcemy, bo tworzone na podstawie klas obiekty miały jakieś bazowe cechy, a dodatkowo cechy właściwe tylko dla danego obiektu, przydaje się
// inheritance

class AllDepartments {
    private employees: string[] = [];

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

// w tej nowej klasie chcę wykorzystać id, name i emploees z klasy AllDepartments + dodać rzeczy właściwe dla ITDepartment

// ważne, że można "dziedziczyć" tylko z jednej klasy; robi się to za pomocą słówka kluczowego extends

// nowa klasa dziedziczy wszystko od starej - nawet konstruktor, więc póki nie używamy nic nowego, nie trzeba nic dodawać, to już zadziałą:

// class ITDepartment extends AllDepartments {
// }

// const it = new AllDepartments(1, 'IT')
// console.log(it)

// kiedy jednak tworzymy nowy konstruktor w klasie, która dziedziczy z innej, musimy użyć słówka "super":

class ITDepartment extends AllDepartments {

    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    };
};

const it = new ITDepartment(1, ['Max']);

it.depDescription();
it.addEmp('John');
it.addEmp('Lola');
it.printInfo();
console.log(it);


class AccountingDepartment extends AllDepartments {

    constructor(id: number, private reports: string[]){
        super(id, 'Accounting');
        this.reports = reports
    };

    addReport(text: string) {
        this.reports.push(text);
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
console.log(accDep);
