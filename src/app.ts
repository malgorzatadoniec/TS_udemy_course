// LESSON 62 optional parameters and properties

interface Named {
    readonly name?: string;
    outputName?: string;              // jakąś wartość możemy np. określić jako opcjonalną, za pomocą ?
}

interface Greetable extends Named {        
     greet(phrase: string): void;
 };
 
 class Person implements Greetable {       
     name?: string;                            // w klasie też wartości mogą być oznaczone jako opcjonalne, ale wtedy w interfejsie też takie muszą być
     age = 18;                                         
         
     constructor(n?: string){                    // parametry też mogą być opcjonalne, wtedy dajemy albo ?, albo wartość domyślną (po string = "XXX")
        if(n) {
         this.name = n;
         }
     };
 
     greet(phrase: string) {
        if(this.name){
         console.log(phrase + this.name)
        } else {
            console.log('Hi!')
        }
     }
 };
 
 let userOne: Greetable;
 
 userOne = new Person()
 
 userOne.greet('Hi I am ')
 console.log(userOne) 