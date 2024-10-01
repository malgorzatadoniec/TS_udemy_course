"use strict";
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
function combine(input1, input2, resultType // tu użyjemy union types razem z literar types i określamy, co konkretnie może się pojawić w tym paramatrze
) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedNames = combine("Max", "Anne", "as-text");
console.log(combinedNames);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
