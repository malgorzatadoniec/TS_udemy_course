// LESSON 60 extending interfaces

// w interfejsach można zastosować dziedziczenie, podobnie jak w klasach

interface Named {
    readonly name: string;
}

interface Greetable extends Named {        // tu po przecinku też można dodać kolejny interfejs do dziedziczenia (w przeciwieństwie do klas)
     greet(phrase: string): void;
 };
 
 class Person implements Greetable {       // możemy albo tu, po przecinku dodać "Named" albo użyć dziedziczenia jak wyżej
 
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