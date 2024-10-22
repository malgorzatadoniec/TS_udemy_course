// LESSON 47 shorthand initialization - jak skrócić inicjalizację w konstruktorze, żeby nie przepisywać wszystkiego 2 razy

class Dep2 {

    // private id: number;
    // private name: string;
    private employees: string[] = [];

    constructor(private id: number, public name: string){    // jeśli w tej skróconej wersji coś ma być public, to trzeba to wprost zapisać
        // this.id = id;
        // this.name = n;

    }

    describingDep2() {
        console.log(`Department ${this.id}: ${this.name}`)
    }

    addEmployee2(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo2() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting2 = new Dep2 (1, 'Accounting');

accounting2.addEmployee2('Tom Hanks');
accounting2.addEmployee2('Angelina Jolie');


accounting2.describingDep2();
accounting2.printEmployeeInfo2();