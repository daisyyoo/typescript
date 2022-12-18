console.log('Hello, world!');

let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4;
  // must be same primitive type that was originally assigned
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);
