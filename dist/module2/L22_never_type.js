"use strict";
// LESSON 22 NEVER TYPE
// jest to kolejny typ, jaki może zwrócić funkcja, tak jak void
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
generateError('An error occured!', 500);
// taka funkcja nigdy nie zwraca wartości, więc zamiast void (która może zwracać, ale nie jest to wykorzystywane), warto użyć typu never
