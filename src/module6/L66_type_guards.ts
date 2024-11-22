// LESSON 66 more on type guards
// pomagają przy union types, przydają się, kiedy chcemy wiedzieć, który z dozwolonych typów dostajemy

type Combineble = string | number; 

function add(a: Combineble, b: Combineble) {
    if(typeof a === 'string' || typeof b === 'string') {    // to jest type guard za pomocą typeof - sprawdzenie, jaki to typ 
        return a.toString() + b.toString();
    }
    return a + b
};

// są też inne type guardy:

// in:

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmploee = Admin & Employee;

type UknownEmploee = Employee | Admin;

function printEmploeeInfo(emp: UknownEmploee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    };
    if ('startDate' in emp){
        console.log('Start date : ' + emp.startDate);
    };
};

const e1: ElevatedEmploee = {
    name: "Anna",
    privileges: ['create-servr'],
    startDate: new Date()
};

printEmploeeInfo(e1);

printEmploeeInfo({name: 'Max', startDate: new Date()});

// instanceof:

class Car {
    drive() {
        console.log('Driving...');
    };
};

class Truck {
    drive() {
        console.log('Driving a truck...');
    };

    loadCargo(amount: number) {
        console.log('Cargo is ' + amount);
    };
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {      // tu możemy użyć też in, ale też instanceof (lepsze)
    vehicle.drive();
    if (vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    };
};