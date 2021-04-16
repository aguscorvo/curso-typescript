// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 12312; // error

let otherVariable = null;
// otherVariable = 213;

console.log(`nullVariable: ${nullVariable}
otherVariable: ${otherVariable}`);

// UNDEFINED
let undefinedVariable: undefined = undefined;
// undefinedVariable = 12312; // error;

let otherUndefined = undefined;
// otherUndefined = 12312;

console.log(`undefinedVariable: ${undefinedVariable}
otherUndefined: ${otherUndefined}`);

//Null y Undefined como subtipos

// --strictNullChecks
let albumTitle: string;
// albumTitle = null;
// albumTitle = undefined;
