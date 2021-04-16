"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
let username;
username = 'aguscorvo';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5
    ? `Welcome, ${username}`
    : 'Username is too short';
console.log(`message: ${message}`);
let usernameWithId = 'aguscorvo 1';
//Como obtener el username?
username = usernameWithId.substring(0, 9);
console.log(`Updated username: ${username}`);
// Sintaxis "as"
message =
    username.length > 5
        ? `Welcome, ${username}`
        : 'Username is too short';
console.log(`message: ${message}`);
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log(`username: ${username}`);
