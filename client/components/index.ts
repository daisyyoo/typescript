// console.log('Hello, world!');

// let aged = true;
// let realAge = 0;

// if (aged) {
//   realAge = 4;
//   // must be same primitive type that was originally assigned
// }

// let dogAge = realAge * 7;

// console.log(`${dogAge} years`);


// let firstName = 'muriel!';

// console.log(firstName.toUpperCase());
// // Typescript uses same string methods as JS, so if the method is typed
// // incorrectly, it'll tell you in an error message

// console.log(firstName.length);

// let guess;
// guess = 'green';
// guess = 5;
// // a variable can be declared with no type, making it type = "any", which can
// // therefore be assigned different types of primitives without incurring an error

// let phoneNumber: string;
// // you can assign a type to a variable without a value so that the value can be assigned later, but with the same type.

// if (Math.random() > 0.5) {
//   phoneNumber = '+61770102062';
// } else {
//   phoneNumber = '7167762323';
// }

// function printOperations(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('Both arguments must be numbers!');
//   }

//   console.log(a + b, a / b);
// }

// // The function call below should print: 12 1
// printOperations(6, 6);
// // had to be the same number primitive type, used to be string

// function exclaim(name, count) {
//   for (let i = 0; i < count; i += 1) {
//     console.log(`${name}!`);
//   }
// }

// // Exclaim 'Muriel!' six times
// exclaim('Muriel', 6);
// // made sure the parameters were in the same order
// // so that name was a string and count was a number

// function triple(value: number) {
//   // parameters can be set with a primitive type
//   return value * 3;
// }

// function greetTripled(greeting: string, value: number) {
//   console.log(`${greeting}, ${triple(value)}!`);
// }

// greetTripled('Hiya', 5);
