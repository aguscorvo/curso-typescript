"use strict";
// Tipo explícito
let idUser;
idUser = 1; // number
idUser = '1'; // string
console.log(`idUser: ${idUser}`);
// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log(`otherId: ${otherId}`);
let surprise = 'hello Typescript';
// surprise.sayHello(); //error
const res = surprise.substring(6); // error
console.log(`res ${res}`);
