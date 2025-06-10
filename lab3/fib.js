'use strict';

function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  return x * pow(x, n - 1);
}

// console.log(pow(2, 2));  // 4
// console.log(pow(2, 0));  // 1
// console.log(pow(2, -2)); // 0.25

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumTo(100)); // 5050

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// console.log(isLeapYear(2024)); //true
// console.log(isLeapYear(2025)); //false
// console.log(isLeapYear(2000)); //true
// console.log(isLeapYear(1900)); //false

function factorial(n) {
  if (n === 0)
    return 1n;
  return BigInt(n) * factorial(n - 1);
}

// console.log(factorial(0)); // 1n
// console.log(factorial(5)); // 120n

// Функция fib(n), возвращающая n-е число Фибоначчи

export function fib(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fib(0));   // 0n
console.log(fib(100)); // 354224848179261915075n

function compare(x) {
  return function (y) {
    return y > x ? true : y < x ? false : null;
  };
}

// console.log(compare(5)(4)); // false
// console.log(compare(5)(5)); // null
// console.log(compare(5)(6)); // true


function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sum());       // 0
// console.log(sum(1));      // 1
// console.log(sum(1, 2));   // 3
