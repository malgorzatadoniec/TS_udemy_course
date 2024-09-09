// LESSON 1

//console.log('Hello world!!!')



// LESSON 2 - core types

// możemy określić, jakiego typu powinien być parametr wprowadzony do funkcji, w ten sposób możemy np uniknąć zrobienia błędu, który doprowadzi do sytuacji, że  
// będzie można podać string a nie number, przez co JS dokona konkatynacji, a nie działanie matematycznego (np.  podane zostanie '5' a nie 5, 
// więc wynik to będzie 52.8 a nie 7.8, jak w przykładzie poniżej)

// function add(n1: number, n2: number) {
    
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);




// // LESSON 3 - typeof operator in JS

// console.log(typeof number1);

// JS-owy sposób na uniknięcie błędu z lekcji 2 - należy to wykorzystać, jeśli musimy sprawdzić typ danych w runtimie 

// function add2(n1, n2) {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw new Error('Incorrect input!');
//     } 
//         return n1 + n2
// }

// const n1 = '5'
// const n2 = 2.8
// const result2 = add2(n1, n2);
// console.log(result2)



// LESSON 4 - string i boolean

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     const result = n1 + n2
//     if (showResult) {
//         console.log(phrase + result)
//     } else {
//         return result
//     }
// }

// const n1 = 5
// const n2 = 2.8
// const printResult = true
// const resultPhrase = 'Result is: '

// add(n1, n2, printResult, resultPhrase);


// LESSON 5 - type inference

// TS nie tylko rozumie wprost określone typy danych (np. w argumentach funkcji n1: number), TS "stara się zrozumieć" jakiego typu powinna być stała lub zmienna 
// (np. const number1 = 5 - będzie rozumiał, że wartość przypisana do stałej number1 ma być typu liczbowego - number)
