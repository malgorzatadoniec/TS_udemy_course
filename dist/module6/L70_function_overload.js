"use strict";
// LESSON 70 function overloads
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // to jest type guard za pomocą typeof - sprawdzenie, jaki to typ 
        return a.toString() + b.toString();
    }
    return a + b;
}
;
const result = add(1, 5); // tu zwracamy albo string albo number, a czasem chcielibyśmy wiedzieć dokładnie, co zwróciliśmy; możemy to zmienić za 
// za pomocą type casting (as number), ale nie jest to wydajny sposób
const result2 = add(1, 'Max'); // i teraz wie, że jest to strong, bo podaliśmy tę opcję nad funkcją, pokazuje też, że jeszcze są 3 inne możliwości wywołania
// tej funkcji                                  
//# sourceMappingURL=L70_function_overload.js.map