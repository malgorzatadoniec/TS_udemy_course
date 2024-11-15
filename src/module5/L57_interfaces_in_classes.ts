// LESSON 57 Interfaces with classes

// często można używać interfajsu i typu kasomowego zamiennie, ale nie zawsze - interfejsy służą tylko do opisu obiektu (typy kastomowe nie tyko)
// oba można zaimplementować w klasie, ale częściej używa się intefejsów
// w klasach można implementować więcej niż 1 interfejs

interface Greetable {
    name: string;
    greet(phrase: string): void;
};

class Person implements Greetable {

    name: string;
    age = 18;
        
    constructor(n: string){
        this.name = n;
    };

    greet(phrase: string) {
        console.log(phrase + this.name)
    }
};

let userOne: Greetable;

userOne = new Person('John')

userOne.greet('Hi I am ')
console.log(userOne) 