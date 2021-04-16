"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user']
let user;
user = [1, 'aguscorvo'];
console.log('user', user);
console.log('username.lenght', user[1].length);
console.log('id', user[0]);
// Tuplas con varios valores
// is, username, isPro
let userInfo;
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo);
// Arreglo de tuplas
let array = [];
array.push([1, 'aguscorvo']); //0
array.push([2, 'paparazzi']); //1
array.push([3, 'lensQueen']); //2
console.log('array', array);
// Uso de funciones Array
// lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001'); // lensQueen001;
console.log('array', array);
