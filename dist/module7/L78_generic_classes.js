"use strict";
// LESSON 78 generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    ;
    removeItem(item) {
        if (this.data.indexOf(item) === -1) { // poprawka dla obiektów
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    ;
    getItems() {
        return [...this.data];
    }
    ;
}
;
const textStorage = new DataStorage();
textStorage.addItem('Anna');
textStorage.addItem('John');
textStorage.removeItem('Anna');
console.log(textStorage.getItems());
const unionStorage = new DataStorage();
unionStorage.addItem(1);
unionStorage.addItem(4);
unionStorage.addItem('Anna');
unionStorage.removeItem(1);
console.log(unionStorage.getItems());
// problemy z obiektami i tablicami, gdy mamy wykorzystane indexOf (zostanie usunięty ostatni obiekt czy też element tablicy, a nie wskazany, bo indexOf nie
// zadziała poprawnie - na to jest poprawka w kodzie powyżej) + trzeba się upewnić, że usuwamy konkretny obiekt:
// const objectStorage = new DataStorage<object>();
// const annaObj = {name: 'Anna'};
// const johnObj = {name: 'John'};
// objectStorage.addItem(annaObj);
// objectStorage.addItem(johnObj);
// objectStorage.removeItem(annaObj);             
// console.log(objectStorage.getItems());
// ale to jest skomplikowane, lepiej by było, żeby się upewnić, że w klasie mogą być tylko prymitywne typy, np number, string
// klasy też mogą mieć kilka generic typów, mogą mieć też funkcje, które mają generic typy
//# sourceMappingURL=L78_generic_classes.js.map