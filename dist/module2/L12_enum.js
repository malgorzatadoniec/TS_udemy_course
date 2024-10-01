"use strict";
// LESSON 12
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// jak się na nie najedzie, to widać jaki mają numer przypisany. domyślnie zaczyna się od 0; można to zmienić:
// enum Role {ADMIN = 5, READ_ONLY_USER, AUTHOR} - teraz READ_ONLY_USER ma 6, a AUTHOR - 7
// enum Role {ADMIN = 5, READ_ONLY_USER = 100, AUTHOR = "AUTHOR"} - można też każdemu nadać własny numer lub nawet tekst, ale po co
const person = {
    name: 'John',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
