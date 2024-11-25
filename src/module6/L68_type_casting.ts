// LESSON type casting

// pomaga w "powiedzeniu" TS, że jakaś wartość jest określonego typu, tam, gdzie TS nie jest w stanie sam powiedzieć

// const paragraph = document.querySelector('p'); // TS jest w stanie zobaczyć, co to za typ, jeśli szukamy go w ten sposób

// const userInputElement = document.getElementById('user-input')!; // tu TS nie wie, co to za element, wie tylko, że HTMLElement, ale nie wie jakiego rodzaju
// dodanie ! sprawia, że null przestaje być problemem (bo na ten moment element HTMLElement | null jest albo ogólnym elementem, albo null)

// userInputElement.value = "Hi there!"  // dlatego dostajemy tu error, bo TS nie wie, jaki to konkretnie element, więc nie wie, że może mieć value


// są dwa sposoby na type casting:


// 1. dodanie przed elementem, na który chcemy rzutować typ


// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; 

// userInputElement.value = "Hi there!"       // teraz nie mamy errora


// 2. dla projektów w react (żeby nie kłóciło się ze składnią reacta, ale działa też bez reacta);


const userInputElement = document.getElementById('user-input')! as HTMLInputElement; 

userInputElement.value = "Hi there!"   


// ! pozwala powiedzieć TS, że to co jest przed nim, nigdy nie będzie null; jeśli nie wiemy, czy ten element nigdy nie zwróci null, wtedy 
// należy użyć if check

const userInputElement2 = document.getElementById('user-input'); 

if(userInputElement2) {
    (userInputElement as HTMLInputElement).value= 'Hi there! 2'
}
