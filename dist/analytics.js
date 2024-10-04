"use strict";
// LESSON 32
// jeśli "noImplicitAny": false byłoby wyłączone, to nie podkreśli nam momentów, kiedy nie sprecyzowaliśmy typu parametru, zmiennej itp, a powinniśmy
// przykład poniżej - jeśli nie określimy typu data w parametrze funkcji, to TS pokaże błąd
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics('The data');
