"use strict";
// LESSON 42 what are classes?
// classes - blueprints for objects - teoretyczna definicja obiektów, opisują jak powinien wyglądać obiekt, jakie mieć właściwości i metody
// objects - "the things you work with in code" - INSTANCES of classes = są oparte na klasach, struktura każdego z nich jest taka sama, jak klasy, 
//              na której jest oparty, różnią się między sobą jakimiś konkretnymi danymi
// dzięki klasom można tworzyć szybko wiele obiektów
// przykład:
// klasa OSOBA: imię, nazwisko, wiek, płeć
// obiekty: MAREK: Marek, Kowalski, 28, m
//          ANIA: Anna, Kowalik, 50, k
//          Janek: Jan, Kowal, 60, m
// LESSON 43 creating first class
class Department {
    constructor(n, h) {
        this.name = n;
        this.headOfDepartment = h;
    }
}
const hr = new Department('HR', 'John Doe');
console.log(hr);
//# sourceMappingURL=L42-43_classes_basics.js.map