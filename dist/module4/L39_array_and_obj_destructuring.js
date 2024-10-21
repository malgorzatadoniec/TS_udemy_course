"use strict";
// LESSON 39 array and object destructuring
const hobby = ['sport', 'gaming'];
// co jeśli chcemy wyciągnąć wszystkie elementy i przypisać je do zmiennych/stałych?
// można to zrobić na piechotę
const hobby1 = hobby[0];
const hobby2 = hobby[1];
console.log('1. ' + hobby1 + ', 2. ' + hobby2);
// ale można to zrobić za pomocą array destructuring
const flowers = ['mak', 'slonecznik', 'roza', 'mlecz'];
const [flower1, flower2, ...remainingFlowers] = flowers;
console.log('1. ' + flower1 + ', 2. ' + flower2);
console.log(remainingFlowers);
console.log(flowers);
// działa to też dla obiektów:
// ważne, żeby pamiętać, że kolejność w obiektach nie jest określona, więc w tym wypadku wyciągamy za pomocą kluczy:
const person2 = {
    firstName: "Ann",
    years: 23,
    height: 165
};
const { firstName: uName, years, height: cm } = person2; // możemy zmienić nazwę klucza, robimy to po : 
console.log(uName, years, cm);
console.log(person2);
//# sourceMappingURL=L39_array_and_obj_destructuring.js.map