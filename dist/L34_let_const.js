"use strict";
// LESSON 34 let i const
// https://compat-table.github.io/compat-table/es6/
const userName = "Max";
let age = 30;
age = 20;
console.log(userName + " is " + age);
// dlaczego już nie należy używać var?
// scopes in JS, dla var jest scope globalny i w funkcji - zmienne, które są zdef poza funkcją są dostępne wszędzie w skryptach; zmeinne zdef wewnątrz funkcji,
// są dostępne tylko dla tej funkcji, ale np w if statement już tak, a tego nie chcemy
// let jest dostępne tylko w blokach {} - funkcja, if statement, pętla..., w których je zdef lub w blokach poniżej
// dlatego lepiej użyć let, bo coś takiego wyrzuci błąd:
// if (age > 10) {
//     let isYoung = true
// };
// console.log(isYoung)  - error, bo isYoung działa tylko wewnątrz if statement 
// to zadziała:
if (age > 10) {
    let isYoung = true;
    console.log(isYoung);
}
;
//# sourceMappingURL=L34_let_const.js.map