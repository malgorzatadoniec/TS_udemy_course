// LESSON 67 discriminated unions

// pomagają z type guards
// jest to wzór, którego można użyć podczas pracy z union typami, który sprawaia, że używanie type guards jest łatwiejsze
// jest dostępny podczas pracy z typami obiektów

interface Bird {
    type: 'bird';                  // dodajemy typ, żeby zrobić discriminated union
    flyingSpeed: number;
};

interface Horse {
    type: 'horse';
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    };
    console.log('Moving with speed ' + speed)
};

moveAnimal({type: 'bird', flyingSpeed: 10})