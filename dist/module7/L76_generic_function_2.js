"use strict";
// LESSON 76 another generic function
;
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    ;
    return [element, descriptionText];
}
;
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['Math']));
// console.log(countAndDescribe(10));                 // to wywoła error, bo number nie ma length property
//# sourceMappingURL=L76_generic_function_2.js.map