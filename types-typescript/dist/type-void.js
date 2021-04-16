"use strict";
// VOID
// Tipo explicito
function showInfo(user) {
    console.log(`User info`, user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'aguscorvo', firstName: 'Agustina' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log(`User info 
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'aguscorvo', firstName: 'Agustina' });
// Variable de tipo void
let unusable;
// unusable = null;
unusable = undefined;
// TIPO NEVER
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    //return sum;
}
sumNumbers(10);
//ciclo infinito, el programa nunca termina
