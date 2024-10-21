"use strict";
// LESSON 38 rest parameters
// co, jeśli chcemy stworzyć funkcję, która będzie przyjmować niestałą ilość parametrów?
// możemy też użyć ... + nazwa zbiorcza dla elementów (wtedy elementy podane w trakcie wywoływania funkcji zostaną zmergowane do jednego elementu - tablicy i 
// przekazane jako parametr funkcji)
const addFunction = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNum = addFunction(1, 4, 5, 3.5);
console.log(addedNum);
//# sourceMappingURL=L38_rest_parameters.js.map