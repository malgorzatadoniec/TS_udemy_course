// LESSON 21 UNKNOWN TYPE

let userInput: unknown; // defaultowo jest typ any
let userName: string;

// w unknown można storować wszsko:

userInput = 5
userInput = "Max"
userInput = [1, 2, 7]
userInput = {age: 30}

//userName = userInput; // tu pojawia się error: Type unknown is not assignabel to type string; jeśli zmienimy userInput na any, nie ma błędu

// żeby uniknąć tego błędu musimy najpierw sprawdzić typ userInput:

if (typeof userInput === "string") {
    userName = userInput
}

// dlatego lepiej użyć unknown niż any - dale pewnien sposób na sprawdzenie typu, w przeciwieństwie do any

