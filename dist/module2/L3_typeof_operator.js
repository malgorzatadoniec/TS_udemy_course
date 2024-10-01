"use strict";
// LESSON 3 - typeof operator in JS
console.log(typeof number1);
// JS-owy sposób na uniknięcie błędu z lekcji 2 - należy to wykorzystać, jeśli musimy sprawdzić typ danych w runtimie 
function add2(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    return n1 + n2;
}
const n1 = '5';
const n2 = 2.8;
const result2 = add2(n1, n2);
console.log(result2);
