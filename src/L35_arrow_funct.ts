// LESSON 35 arrow functions

// można zrobić tak:

// const add = function(){}

// albo tak:

// const add = (a: number, b: number) => {
//     return a + b;
// };

// console.log(add(2, 5))

// jeśli w funkcji mamy tylko 1 wyrażenie, to można nawet pominąć {}:

const add = (a: number, b: number) => a + b;

console.log(add(2, 8));

// jeśli w funkcji jest tylko jeden parametr to można to zrobić tak- nie stosując (), ale określając tym w stałej

const printOutput: (a: number|string) => void = output => console.log(output);

printOutput(add(3,3));

// można to zastosować np w takim przypadku:

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
};