// LESSON 26 + LESSON 32 ("strictNullCheck", "strictBindCallApply")

// jeśli damy const button = document.querySelector('button'); bez wykrzyknika, to button w button.addEventListener będzie wskazywał błąd, ponieważ ta wartość
// potencjalnie może być NULLem

// można tego uniknąć dodając ! - to daje znać TS, że wiemy, że ta wartość nie będzie nullem:

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
    console.log('Clicked!')
});

// jeśli nie jesteśmy pewni, to najlepiej zamknąć to w if checku:

if(button) {
    button.addEventListener('click', () => {
        console.log('Clicked!')
    });
}

// można też ustawiając "strictNullCheck" na false, ale to pozbawia nas TSowego sygnału, że w innych miejscach jest niebezpieczeństwo, że wartość będzie nullowa

// "strictBindCallApply"

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, "Success"))
}