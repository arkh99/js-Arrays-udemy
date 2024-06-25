'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
/*
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// slice method * doesnt change the original array and returns a new array each time
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2)) ;


// splice method * changes the original array and returns a new array of changes
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const name = ["ali","mohsen", "reza"]
// console.log(fruits.concat(name));
// console.log([...fruits, ...arr]);

// const arr = [11, 23, 45, 62];

// // getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, el] of movements.entries()) {
//   if (el > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${el}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
//   }
// }

// movements.forEach(function (m) {
//   if (m > 0) {
//     console.log(`You deposited ${m}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(m)}`);
//   }
// })

// [...movements.entries()].forEach(function ([i, el]) {
//   if (el > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${el}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
//   }
// })

movements.forEach(function (el, i) {
  if (el > 0) {
    console.log(`Movement ${i + 1}: You deposited ${el}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
  }
})
