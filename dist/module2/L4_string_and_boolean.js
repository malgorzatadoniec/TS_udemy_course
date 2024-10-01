"use strict";
// LESSON 4 - string i boolean
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const n1 = 5;
const n2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(n1, n2, printResult, resultPhrase);
