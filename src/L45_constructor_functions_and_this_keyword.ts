// LESSON 45 constructor functions and "this" keyword

// w konstruktorze mogą być zawarte także metody

class Departments {

    name: string;

    constructor (n: string){
        this.name = n
    }

    describe(this: Departments) {                               // dobrze dodać tu taki "dummy" parametr, by uniknąć błędów
        console.log('Department: ' + this.name)
    }
}

const acc = new Departments('Accounting'); 

acc.describe();

const accCopy = {name: 'DUMMY', describe: acc.describe};

accCopy.describe();

