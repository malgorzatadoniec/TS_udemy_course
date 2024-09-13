// LESSON 8 objects
// const person = {
//     name: "Gosia",
//     age: 28,
//   };
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Gosia",
//   age: 28,
// };
// const human: object = {
//     name: "Tom",
//     age: 17
// }
// console.log(person.name);
// LESSON 9 nested objects
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['new', 'sale'],
//     details: {
//         title: 'Rug',
//         descr: 'New red rug'
//     }
// }
// LESSON 10 Arrays
// const person = {
//     name: 'John',
//     age: 50,
//     hobbies: ['sports', 'cooking']
// }
// w ten sposób dajemy znać TS, że będzie to tablica, z elementami typu string:
// let favouriteActivities: string[]
// favouriteActivities = 'sports' - to wywołuje error
// favouriteActivities = ['sports'] - to nie wywołuje erroru
// favouriteActivities = ['sports', 1] - to wywołuje błąd
// any daje pełną elastyczność, ale pozbawia nas benefitów TS
// let favAct: any[]
// favAct = ['sports', 1, 8.9, false]
// pętla for
// for (const hobby of person.hobbies) {
//     console.log(hobby)
// }
// ze stałą hobby możemy zrobić wszystko to, co ze stringiem, np. console.log(hobby.toUpperCase)
// LESSON 11 Tuples - tablice o określonej długości i typie
var person = {
    name: 'John',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: [2, 'player'] // tuple - zakładamy, że user może mieć tylko jedną rolę, która jest identyfikowana przez id i opis - dlatego tuple może mieć tylko 2 elementy
};
// person.role[1] = 10  - to daje error, bo określiliśmy, że 2. element ma być stringiem
person.role[1] = 'author'; // - to nie wywoła błędu - zamiast player przypiszemy author
console.log(person.role[1]);
// wyjątek w tuplach - push jest w nich dozwolony, więc TS nie widzi tego jako błąd
person.role.push('admin');
// person.role = [] to błąd
person.role = [1, 'gamer'];
console.log(person.role);
