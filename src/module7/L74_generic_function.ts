// LESSON 74 creating a generic function - ustalamy więcej info, by lepiej pracować z tym, co zwraca funkcja

function merge<T, U>(objA: T, objB: U){
    return  {...objA, ...objB};
};

const mergedObj = merge({name: 'Anna', hobbies: ['sports', 'math'], siblings: 2}, {age: 22});
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.siblings);
console.log(mergedObj.age);

const mergedObj2 = merge({animal: 'Dog', noOfAnimals: 1}, {nameOfAnimal: 'Rex'})
console.log(mergedObj2)
console.log(mergedObj2.animal)


