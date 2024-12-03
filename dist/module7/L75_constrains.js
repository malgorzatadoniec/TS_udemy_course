"use strict";
// LESSON 75 working with constrains
// bez constrainów, to nie zwraca erroru, choć jako 2. parametr nie podajemy object a number
// function merge<T, U>(objA: T, objB: U){
//     return  {...objA, ...objB};
// };
// const mergedObj = merge({name: 'Anna', hobbies: ['sport']}, 30) // teraz 
// console.log(mergedObj)
// chcemy, żeby oba parametry były obiektami (dowolnymi, ale obiektami)
function merge2(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
;
// const mergedObj2 = merge2({name: 'Anna', hobbies: ['sport']}, 30) // teraz tu wyskakuje error
// console.log(mergedObj2)
//# sourceMappingURL=L75_constrains.js.map