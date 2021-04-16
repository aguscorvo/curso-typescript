// Type: object

let user: object;
user = {}; // Object

user = {
  id: 1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true,
};

console.log('user:', user);
//Object vs object (Clase JS vs tipo TS)
const myObject = {
  id: 1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true,
};

const isInstance = myObject instanceof Object; // clase Object Javascript
console.log(`isInstance: ${isInstance}`);

console.log(`myObject.username: ${myObject.username}`);
