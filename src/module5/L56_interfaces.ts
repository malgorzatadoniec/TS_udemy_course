// LESSON 56 INTERFACES

// interfejs opisuje strukturę obiektu, służy do opisania, jak powinien wyglądać obiekt; działa trochę jak "cutom type"
// można ich używać do sprawdzenia typu obiektu

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
};

let userOne: Person;

userOne = {
    name: "Ania", 
    age: 20, 
    greet(phrase: string){
        console.log(phrase + ' ' + this.name + '!')
    }
    }

userOne.greet('Hello')