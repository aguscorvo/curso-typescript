"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let idUser;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameById(id) {
    // Logica de negocio, find the user
    return 'aguscorvo';
}
getUsernameById(20);
getUsernameById('20');
// let smallPicture: SquareSize = '200x200'; //error
let smallPicture = '100x100';
let mediumPicture = '500x500';
console.log(`smallPicture: ${smallPicture}, mediumPicture: ${mediumPicture}`);
