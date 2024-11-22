// LESSON 65 intersection types

// pozwalają na łączenie innych typów

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
    name: "Anna",
    privileges: ['create-servr'],
    startDate: new Date()
};

// to samo można osiągnąć tworząc interfejsy i używając dziedziczenia interfejsów

// intersection type są bardzo użyteczne przy obiektech, ale można ich używać ze wszystkimi typami:

type Combineble = string | number; // union type
type Numeric = number | boolean;

type Universal = Combineble & Numeric;

const no: Universal = 2

// w tym wypadku typ Universal sprawdza część wspólną, więc tylko number jest okej