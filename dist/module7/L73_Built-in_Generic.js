"use strict";
// LESSON 73 Generics
// nie istnieją w JS, tylko w TS
// tablica jest przykładem typu, który jest generic
const names = ['Max', 'Anna']; // to ma typ string[]
const names2 = []; // to ma typ any[]
// ale jak zrobimy tak, to wyskoczy error:
// const names3: Array = []; pojawia się info, że to jest generic type i potrzebuje 1 argumentu
// ile razy widzimy zapis typu: 'Array<T>', znaczy, że to jest generic
// tablica jest typem samym w sobie, tak samo jak np obiekt; ale tablica przechowuje też wartości o określonym typie
// typ tablicy możemy ustawić na dwa sposoby:
const tab = [];
const tab2 = ['Anna', 'Tom']; // typ połączony z innym typem - tablica ze string lub number, any itd...
// dzięki temu wiem, że z tą tablicą mogę robić stringowe rzeczy
tab2[0].split(' ');
// inny generic type wbudowany w ts to Promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then(data => {        // dzięki generic types to wyrzuci error
//     data.split( ' '); 
// });
//# sourceMappingURL=L73_Built-in_Generic.js.map