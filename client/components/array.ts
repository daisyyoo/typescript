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

// Arrays can have types, and then have multidimensional Arrays,
// like if an element of an array is another array, so on and so forth

// Arrays:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [[[1], [2, 3]], [[7], bestNumbers]];

// A tuple cannot be reassigned with an array variable
// A tuple is like an array but with the type of each element predefined.

let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];

// favoriteCoordinates[6] = -6.825;
// Tuples also have indexes, like arrays.
// This doesn't work because tuples have a predefined length from when the types are defined.
// This tuple's last index is 5, so you can't add anything into it.
