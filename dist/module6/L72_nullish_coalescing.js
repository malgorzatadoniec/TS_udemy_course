"use strict";
// LESSON 72 nullish coalescing
// pomaga sobie radzić z danymi o wartości null, kiedy nie wiemy czy są null, undefined lub zdefinowane
const uesrInput = null;
const storedData = uesrInput !== null && uesrInput !== void 0 ? uesrInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=L72_nullish_coalescing.js.map