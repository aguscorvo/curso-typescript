// ARRAY
// Corchetes []

// Tipo explicito

let users: string[];
users = ['aguscorvo', 'paparazzi', 'whoknows'];
// users = [1, true, 'test']; //error

//Tipo inferido

let otherUsers = ['aguscorvo', 'paparazzi', 'whoknows'];
// otherUsers = [1, true, 'test']; //error

// Array<tipo>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite sunset', 'Vacation time', 'Landscape'];

//mas de un tipo
let arrExample: Array<string | number | boolean>;
arrExample = ['firstItem', 2, 'thirdItem', 4, true]; // no da error

// Accediendo a los valores en un Array
console.log(`first user ${users[0]}`);

// Propiedades en Array
console.log(`users.length ${users.length}`);

// Uso de funciones en Array
users.push('newUser');
users.sort();
console.log(`users updated: ${users}`);
