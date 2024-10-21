// L36 default function parameter

// można przyposać funkcji domyślne argumenty (ale tylko do ostatniego parametru lub do wszystkich, nie można tak, że do 1. jest a do drugiego nie):

const add2 = (a: number = 1, b: number = 1, c: number = 1) => a + b + c;

console.log(add2())
console.log(add2(3))
console.log(add2(3, 4))
console.log(add2(2, 2, 2))

