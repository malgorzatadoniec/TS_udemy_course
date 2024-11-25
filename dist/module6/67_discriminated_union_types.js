"use strict";
// LESSON 67 discriminated unions
;
;
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    ;
    console.log('Moving with speed ' + speed);
}
;
moveAnimal({ type: 'bird', flyingSpeed: 10 });
//# sourceMappingURL=67_discriminated_union_types.js.map