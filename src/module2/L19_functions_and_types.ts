// LESSON 19 FUNCTIONS AS TYPES

function add (n1: number, n2: number) {
    return n1 + n2
}

let combineValues

combineValues = add // storujemy funkcję w zmiennej
combineValues = 5 // problem polega na tym, że combineValues ma typ any, więc możemy do niej przypisać cokolwiek, nie tylko funkcję i wtedy to nie zadziała

console.log(combineValues(8, 8)) // egzekwujemy tę zienną jako funkcję

// rozwiązanie:
let combineValuesBetter: Function // to sprawia, że tylko funkcję możemy tu przechować, ale wciąż - każdą funkcję

let combineValuesBest: (a: number, b: number) => number // lepiej - określamy jaki return type ma mieć przechowywana tu funkcja, i że ma mieć 2 parametry typu number
combineValuesBest = add

console.log(combineValuesBest(8, 8)) 