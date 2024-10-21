"use strict";
// LESSON 37 The Spread Operator
// dostawanie się do elementów tablicy - klasyczny sposób - po indeksie:
const hobbies = ['Sport', 'Cooking'];
console.log(hobbies[0]);
// za pomocą sperad operator (...) można dodać w łatwy sposób więcej elementów do tabeli:
const moreHobbies = ['Gaming', 'Painting', ...hobbies]; // ... to spread operator - mówi JS żeby wziąć wszystkie elementy tabeli hobbies i dodać je do moreHobbies
console.log(moreHobbies);
// lub połączyć go z push:
const activeHobbies = ['Hiking'];
activeHobbies.push(...moreHobbies);
console.log(activeHobbies);
// spread operator zadziała też dla obiektów (pozwoli skopiować obiekt):
const person = {
    name: "Ola",
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//# sourceMappingURL=L37_spread_operator.js.map