"use strict";
// LESSON 74 creating a generic function
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
;
const mergedObj = merge({ name: 'Anna', hobbies: ['sports', 'math'], siblings: 2 }, { age: 22 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.siblings);
console.log(mergedObj.age);
const mergedObj2 = merge({ animal: 'Dog', noOfAnimals: 1 }, { nameOfAnimal: 'Rex' });
console.log(mergedObj2);
console.log(mergedObj2.animal);
//# sourceMappingURL=L74_generic_function.js.map