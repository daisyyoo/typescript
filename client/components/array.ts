// Array Type Annotations

let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

// This is how it would be written in JavaScript
function checkCustomersArray() {
  for (var i = 0; i < customersArray.length; i++) {
    const el = customersArray[i];
    if (typeof el === 'number') {
      console.log(`Type error: ${el} should be a string!`);
    }
  }
}

checkCustomersArray();

function stringPush(val: string) {
  if (typeof val === 'string') {
    customersArray.push(val);
  }
}

// Arrays can be assigned the type of value it should contained in 2 ways
// const x: number[] = [2, 5, 6];
// square brackets after type annotation
// OR
// const stuff: Array<string> = ['hello', 'more', 'stuff'];
// Capital A for Array<type> with type in <>

let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];
