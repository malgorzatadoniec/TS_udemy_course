"use strict";
// LESSON 2 - core types
// możemy określić, jakiego typu powinien być parametr wprowadzony do funkcji, w ten sposób możemy np uniknąć zrobienia błędu, który doprowadzi do sytuacji, że  
// będzie można podać string a nie number, przez co JS dokona konkatynacji, a nie działanie matematycznego (np.  podane zostanie '5' a nie 5, 
// więc wynik to będzie 52.8 a nie 7.8, jak w przykładzie poniżej)
function addNo(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const result = addNo(number1, number2);
console.log(result);
