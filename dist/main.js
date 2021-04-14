"use strict";
console.log('Hello Typescript');
// NUMBER
// Explícita
let phone;
phone = 1;
phone = 8001234;
// phone = 'Hello'; //Error
// Inferido
let phoneNumber = 8001234;
phoneNumber = 123;
// phoneNumber = true; //Error
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o1622;
// BOOLEAN
//Tipado explícito
let isPro;
isPro = true;
// isPro = 4; //error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = "asdasd"; //error
//STRING
let username = 'aguscorvo';
username = 'Agustina';
// username = 1111; //error
//Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info: 
    username: ${username}
    fullName: ${username} Corvo
    phone: ${phoneNumber}
    isPro: ${isPro}
`;
console.log(`userInfo ${userInfo}`);
