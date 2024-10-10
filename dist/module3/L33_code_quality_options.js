"use strict";
// LESSON 33 code quality options
if (button) {
    button.addEventListener('click', () => {
        // let userName = "Ola"                          // "noUnusedLocals": true - podkreśli, bo nie używamy tej zmiennej
        console.log('Clicked!');
    });
}
// noImplicitReturns - funkcja nie zawsze zwraca coś
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return; // to pozwala obejść podkreślenie
}
//# sourceMappingURL=L33_code_quality_options.js.map