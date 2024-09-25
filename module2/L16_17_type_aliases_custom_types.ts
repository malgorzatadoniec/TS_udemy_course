// LESSON 16  Type Aliases / Custom Types

type Combinable = number | string;
type ResultTypeDesc = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultType: ResultTypeDesc  
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultType === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26, "as-number");
  console.log(combinedAges);
  
  const combinedNames = combine("Max", "Anne", "as-text");
  console.log(combinedNames);
  
  const combinedStringAges = combine("30", "26", "as-number");
  console.log(combinedStringAges);

  // LESSON 17 więcej przykładów użycia Aliasów/ Typów kastomowych

type User = {name: string; age: number};
const u1: User = {name: 'Max', age: 30}

console.log(u1)

function greet (user: User) {
    console.log('Hi, I am' + user.name);
}

function isOlder (user: User, checkAge: number) {
    return checkAge > user.age;
}

console.log(isOlder(u1, 40))