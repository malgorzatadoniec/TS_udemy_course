"use strict";
// LESSON 77 "keyof" constrain
// function extractAndConvert(obj: object, key: string){  // w tym zapisie mamy error, bo TS nie wie, czy w obj na pewno będzie key
//     return 'Value: ' + obj[key];
// };
// teraz mówimy TS, że pierwszy arg powinien być jakimś obiektem, a drugi - powinien być jakimś kluczem w tym obiekcie
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
;
extractAndConvert({ name: 'Anna', age: 22 }, 'age');
//# sourceMappingURL=L77_keyof_constrain.js.map