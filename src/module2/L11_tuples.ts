// LESSON 11 Tuples - tablice o określonej długości i typie

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];  // to pozwala TS uznać role za tuple, który ma 2 elementy: 1. numeryczny, 2. string
} = {
    name: 'John',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: [2, 'player']   // tuple - zakładamy, że user może mieć tylko jedną rolę, która jest identyfikowana przez id i opis - dlatego tuple może mieć tylko 2 elementy
}

// person.role[1] = 10  - to daje error, bo określiliśmy, że 2. element ma być stringiem

person.role[1] = 'author' // - to nie wywoła błędu - zamiast player przypiszemy author

console.log(person.role[1])

// wyjątek w tuplach - push jest w nich dozwolony, więc TS nie widzi tego jako błąd, ale w innych przypadkach działa ograniczenie liczby i typu:

person.role.push('admin')

// person.role = [] 
// person.role = [1, 2, 'admin'] to błędy - za mało elementów, powinny być 2

person.role = [1, 'gamer'] // to nie błąd - przypisujemy tak, jak powinniśmy

console.log(person.role)