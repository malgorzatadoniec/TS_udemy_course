// LESSON 18   więcej o funkcjach - RETURN TYPE + VOID type

// function add (n1: number, n2: number) {
//     return n1 + n2
// }

// function add2 (n1: number, n2: number) {
//     return n1.toString() + n2.toString()
// }


// // return type można wprost określić, ale nie jest to zalecane (chyba, że z jakiegoś powodu jest to konieczne):

// function add3 (n1: number, n2: number): number {
//     return n1 + n2
// }


// // VOID type

// function printResult (num: number) {
//     console.log('Result: ' + num)
// }

// printResult(add(5, 12))  // to pokaże Result: 17

// console.log(printResult(add(5,12))) // to zwróci undefined


// LESSON 19 FUNCTIONS AS TYPES

// function add (n1: number, n2: number) {
//     return n1 + n2
// }

// let combineValues

// combineValues = add // storujemy funkcję w zmiennej
// combineValues = 5 // problem polega na tym, że combineValues ma typ any, więc możemy do niej przypisać cokolwiek, nie tylko funkcję i wtedy to nie zadziała

// console.log(combineValues(8, 8)) // egzekwujemy tę zienną jako funkcję

// rozwiązanie:
// let combineValues: Function // to sprawia, że tylko funkcję możemy tu przechować, ale wciąż - każdą funkcję

// let combineValues: (a: number, b: number) => number // lepiej - określamy jaki return type ma mieć przechowywana tu funkcja, i że ma mieć 2 parametry typu number
// combineValues = add

// console.log(combineValues(8, 8)) 


// LESSON 20 CALLBACKS

function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) {
    const result = n1 + n2
    callBack(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})
