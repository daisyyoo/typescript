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
