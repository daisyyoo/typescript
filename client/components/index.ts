console.log('Hello, world!');

let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4;
  // must be same primitive type that was originally assigned
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);


let firstName = 'muriel!';

console.log(firstName.toUpperCase());
// Typescript uses same string methods as JS, so if the method is typed
// incorrectly, it'll tell you in an error message

console.log(firstName.length);

let guess;
guess = 'green';
guess = 5;
// a variable can be declared with no type, making it type = "any", which can
// therefore be assigned different types of primitives without incurring an error

let phoneNumber: string;
// you can assign a type to a variable without a value so that the value can be assigned later, but with the same type.

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}

function printOperations(a: number, b: number) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers!');
  }

  console.log(a + b, a / b);
}

// The function call below should print: 12 1
printOperations(6, 6);
// had to be the same number primitive type, used to be string

function exclaim(name: string, count: number) {
  for (let i = 0; i < count; i += 1) {
    console.log(`${name}!`);
  }
}

// Exclaim 'Muriel!' six times
exclaim('Muriel', 6);
// made sure the parameters were in the same order
// so that name was a string and count was a number

function triple(value: number) {
  // parameters can be set with a primitive type
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 5);

function proclaim1(status?: string) {
  // You can write a ? after the parameter to let javascript know that the
  // parameter is optional, thus allowing undefined to be okay
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim1();
proclaim1('ready?');
proclaim1('ready!');

// parameters with a default value don't need a ? after their name, since
// assigning a default value implies that they're optional parameters
function proclaim(status = 'not ready...', repeat = 1) {
  // Change the color to equal sign, and the assignment operator acts as the
  // optional value, while giving it a default value
  for (let i = 0; i < repeat; i += 1) {
    // the || sign is removed since the default value is already given
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim('ready?');
proclaim('ready!', 3);


function getRandomNumber() {
  return Math.random();
}
const myVar = getRandomNumber();
// TypeScript can also infer types of values returned by functions
// Looks at the value of the function's return statement
// since the function returns a number type, myVar is going to be a number type
console.log(myVar);

// import { getUserChoice, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 } from './resources'

// function returnFruit(): string {
  // By expliciting setting a return type at the beginning of the function, TypeScript
  // can test if any of the returns are not of the same type without you have to
  // check every outcome manually.
//   let num = getUserChoice();
//   switch (num) {
//     case 1: return f1();
//     case 2: return f2();
//     case 3: return f3();
//     case 4: return f4();
//     case 5: return f5();
//     case 6: return f6();
//     case 7: return f7();
//     case 8: return f8();
//     case 9: return f9();
//     //The problematic function is f9();
//     case 10: return f10();
//     case 11: return f11();
//     case 12: return f12();
//   }
//   return 'durian.jpg'
// }
// console.log(returnFruit());

function makeFruitSalad(fruit1: string, fruit2: string): void {
  // functions should have type annotation, but if they don't return anything,
  // like console.log doesn't return anything, they should be written with type void.
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad('banana', 'pineapple');


//documentation comments are styled like below to describe what the function does

/**
 * Returns the concatenation of 2 strings
 * @param fruit1 - First input string
 * @param fruit2 - Second input string
 * @returns nothing, aka console.log
 */
function makeFruitSalad1(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

/**
 * Returns a console.log number of times from second param
 * @param status - string 'not ready...'
 * @param repeat - number 1
 * @returns nothing, console.log of a string @param status number of times @param repeat
 */
function proclaim2(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

// Edited to make sure all type annotations were correct for the below code

function useMagnifyingGlass(): any {
  // this cannot be type void despite returning nothing in the beginning because
  // the return is assigned to a variable later on
  console.log('I will use my magnifying glass.')
}

function determineCulprit(): number {
  // this function stays number type because of Math
  return Math.floor(Math.random() * 2 + 1)
}

function doSleuthing(numberOfClues: number, clue1: string, clue2: string, suspect1: string, suspect2: string): string {
  // the function will return type string according to the return statements
  console.log('I am a famous detective and I will solve the crime.');
  let unnecessaryVariable = 'Why is this here?'
  unnecessaryVariable = useMagnifyingGlass();

  console.log('Now I consider the first clue: ', clue1);
  console.log('Now I consider the second clue: ', clue1);

  let culpritNumber: number = determineCulprit();
  // variable culpritNumber has to be number to compare the number below
  console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
  if (culpritNumber == 1) { return (suspect1) }
  if (culpritNumber == 2) { return (suspect2) }

  return "I couldn't figure out who drank the priceless milk. :( :("
}

let answer:any = 3;
// this variable is type any despite being assigned the number 3 because the next
// line of code assigns the variable answer to the function doSleuthing which is type string

answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')

console.log('The culprit was none other than ', answer, '!');
