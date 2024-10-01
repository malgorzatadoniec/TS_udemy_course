"use strict";
// LESSON 16  Type Aliases / Custom Types
function combine(input1, input2, resultType) {
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
const u1 = { name: 'Max', age: 30 };
console.log(u1);
function greet(user) {
    console.log('Hi, I am' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
console.log(isOlder(u1, 40));
