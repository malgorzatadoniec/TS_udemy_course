// LESSON 14 UNION TYPE
var u1 = { name: 'Max', age: 30 };
console.log(u1);
function greet(user) {
    console.log('Hi, I am' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
console.log(isOlder(u1, 40));
