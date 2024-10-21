"use strict";
// L36 default function parameter
// można przyposać funkcji domyślne argumenty (ale tylko do ostatniego parametru lub do wszystkich, nie można tak, że do 1. jest a do drugiego nie):
const add2 = (a = 1, b = 1, c = 1) => a + b + c;
console.log(add2());
console.log(add2(3));
console.log(add2(3, 4));
console.log(add2(2, 2, 2));
//# sourceMappingURL=L36_default_function_parameter.js.map