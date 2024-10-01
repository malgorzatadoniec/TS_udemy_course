"use strict";
// LESSON 20 CALLBACKS
function addAndHandle(n1, n2, callBack) {
    const result = n1 + n2;
    callBack(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
