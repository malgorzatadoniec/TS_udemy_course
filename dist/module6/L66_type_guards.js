"use strict";
// LESSON 66 more on type guards
// pomagają przy union types, przydają się, kiedy chcemy wiedzieć, który z dozwolonych typów dostajemy
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // to jest type guard za pomocą typeof - sprawdzenie, jaki to typ 
        return a.toString() + b.toString();
    }
    return a + b;
}
;
function printEmploeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    ;
    if ('startDate' in emp) {
        console.log('Start date : ' + emp.startDate);
    }
    ;
}
;
const e1 = {
    name: "Anna",
    privileges: ['create-servr'],
    startDate: new Date()
};
printEmploeeInfo(e1);
printEmploeeInfo({ name: 'Max', startDate: new Date() });
// instanceof:
class Car {
    drive() {
        console.log('Driving...');
    }
    ;
}
;
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    ;
    loadCargo(amount) {
        console.log('Cargo is ' + amount);
    }
    ;
}
;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    ;
}
;
//# sourceMappingURL=L66_type_guards.js.map