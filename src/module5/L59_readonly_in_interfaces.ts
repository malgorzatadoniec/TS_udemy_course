// LESSON 59 readonly interface properties 

// w interfejsach można też używać modyfikatora readonly (jest ustawiany tylko raz, nie może być zmieniony po inicjalizacji)
// po ustawieniu readonly w interfejsie nie trzeba już go ustawiać w klasie, jego działanie "przenosi" się na klasę albo obiekt, który jest na nim oparty
// NIE można dać public ani private
// readonly można też ustawić w typie kastomowym

interface Greetable {
   readonly name: string;
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
// userOne.name = "Johnny"    // tu wyrzuci error, bo ustawiliśmy readonly w interfejsie

userOne.greet('Hi I am ')
console.log(userOne) 