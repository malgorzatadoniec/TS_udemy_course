"use strict";
// LESSON 10 Arrays
const person = {
    name: 'John',
    age: 50,
    hobbies: ['sports', 'cooking']
};
// w ten sposób dajemy znać TS, że będzie to tablica, z elementami typu string:
let favouriteActivities;
// favouriteActivities = 'sports' - to wywołuje error
// favouriteActivities = ['sports'] - to nie wywołuje erroru
// favouriteActivities = ['sports', 1] - to wywołuje błąd
// any daje pełną elastyczność, ale pozbawia nas benefitów TS
let favAct;
favAct = ['sports', 1, 8.9, false];
// pętla for
for (const hobby of person.hobbies) {
    console.log(hobby);
}
// ze stałą hobby możemy zrobić wszystko to, co ze stringiem, np. console.log(hobby.toUpperCase)
