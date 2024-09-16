// LESSON 14 UNION TYPE

// function combine (input1: number | string, input2: number | string) {
//     //const result = input1 + input2; // ale po wprowadzeniu number | string tu pojawia się error, bo TS nie analizuje, co jest w union typie, widzi tylko, że jest union type
//     // jak sobie z tym poradzić za pomocą runtime checka (często będzie to potrzebne, choć nie zawsze):

//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result;
// }

// const combinedAges = combine(30, 26)

// console.log(combinedAges)

// const combinedNames = combine('Max', 'Anne')

// console.log(combinedNames)



// LESSON 15 LITERAL TYPES

// opcja pierwsza

// function combine (
//     input1: number | string, 
//     input2: number | string, 
//     resultType: 'as-number' | 'as-text') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     if(resultType === 'as-number') {
//         return +result; // + konwertuje to na numer
//     } else {
//         return result.toString()
//     }
// }

// opcja druga

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultType: "as-number" | "as-text"   // tu użyjemy union types razem z literar types i określamy, co konkretnie może się pojawić w tym paramatrze
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);

// const combinedNames = combine("Max", "Anne", "as-text");
// console.log(combinedNames);

// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedStringAges);



// LESSON 16  Type Aliases / Custom Types

// type Combinable = number | string;
// type ResultTypeDesc = 'as-number' | 'as-text';

// function combine(
//     input1: Combinable,
//     input2: Combinable,
//     resultType: ResultTypeDesc  
//   ) {
//     let result;
//     if (
//       (typeof input1 === "number" && typeof input2 === "number") ||
//       resultType === "as-number"
//     ) {
//       result = +input1 + +input2;
//     } else {
//       result = input1.toString() + input2.toString();
//     }
//     return result;
//   }
  
//   const combinedAges = combine(30, 26, "as-number");
//   console.log(combinedAges);
  
//   const combinedNames = combine("Max", "Anne", "as-text");
//   console.log(combinedNames);
  
//   const combinedStringAges = combine("30", "26", "as-number");
//   console.log(combinedStringAges);


// LESSON 17 więcej przykładów użycia Aliasów/ Typów kastomowych

type User = {name: string; age: number};
const u1: User = {name: 'Max', age: 30}

console.log(u1)

function greet (user: User) {
    console.log('Hi, I am' + user.name);
}

function isOlder (user: User, checkAge: number) {
    return checkAge > user.age;
}

console.log(isOlder(u1, 40))