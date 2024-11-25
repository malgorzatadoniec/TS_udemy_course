// LESSON 69 index properties

// typy indeksów, pozwalają nam tworzyć obiekty, które są bardziej elastyczne pod względem właściwości, które mogą posiadać
// nie podajemy konkretnej nazwy klucza, tylko jego typ, jak w przykłądzie poniżej: będzie to klucz w formie stringa


interface ErrorContainer {
    // id: string;               // można też dodawać zwykłe klucze i wartości, ale muszą być tego samego typu, co index properties
    // id: number;            // to wyrzuci błąd
    [key: string]: string; 
};

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    userName: "Must start with capitel character!",
    phoneNumber: "Must be only numbers!",
    addres: "Cannot be empyt!"
};