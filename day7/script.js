"use strict";

// A function should be able to take unlimited arguments.

// In case of function declarations -> function gets a argument object where as Arrow function do not get access to this argument object so to able to take multiple parameters arrow function need to use the spread opreator.

// Expression functions are the Anonomus Function.

// Self Invoking functions:- Self Invoking functions are those functions which do not need to be called to executed

// Self Invoking Function
// (function (num) {
//   console.log(num * num);
// })(15);

// default parameters in function

// Exercises of DAY7:-

// Exercise Level 1:-

// function fullName(name) {
//   console.log(name);
// }
// fullName("Arpit Mishra");

// const fullName = function (fName, lName) {
//   return `${fName} ${lName}`;
// };

// console.log(fullName(`Rajesh`, `Sharma`));

// const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(15, 35));

// Write a fuction which shows curret Date Time
// const weekDays = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// const showDateTime = function () {
//   const now = new Date(); // Creating a Date Object
//   const year = now.getFullYear();
//   const month = now.getMonth();
//   const date = now.getDate();
//   const day = now.getDay();
//   const hrs = now.getHours();
//   const mins = now.getMinutes();
//   return `${date}/${month + 1}/${year} ${hrs}:${mins} ${weekDays[
//     day - 1
//   ].toUpperCase()}`;
// };

// console.log(showDateTime());

// Reverse an Array:-

const reverseArr = (arr) => {
  let temp;
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
};

console.log(`Reverse Array: ${reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);
