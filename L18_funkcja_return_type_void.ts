// LESSON 18   więcej o funkcjach - RETURN TYPE + VOID type

function add (n1: number, n2: number) {
    return n1 + n2
}

function add2 (n1: number, n2: number) {
    return n1.toString() + n2.toString()
}


// return type można wprost określić, ale nie jest to zalecane (chyba, że z jakiegoś powodu jest to konieczne):

function add3 (n1: number, n2: number): number {
    return n1 + n2
}


// // VOID type

function printResult (num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12))  // to pokaże Result: 17

console.log(printResult(add(5,12))) // to zwróci undefined