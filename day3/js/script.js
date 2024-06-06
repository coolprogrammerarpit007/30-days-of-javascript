`use strict`;

// rule of thumb, if value is not equal with '==' then it will not be equal with '==='


// Date Object in JavaScript

// const today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth()+1);
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());


// Exercise Level1

// let firstName = `Arpit`;
// let lastName = `Mishra`;
// let country = `India`;
// let city = `Jaipur`;
// let age = 25;
// let isMarried = false;
// let year = 2024;

// // console.log(typeof firstName);
// // console.log(typeof lastName);
// // console.log(typeof country);
// // console.log(typeof city);
// // console.log(typeof age);
// // console.log(typeof isMarried);
// // console.log(typeof year);



// const currentYear = new Date().getFullYear();
// const userBirthYear = Number(prompt(`Enter your birth year!`));
// console.log(`User is ${currentYear - userBirthYear} years old!`);

// console.log(`10` === 10); // false
// console.log(parseInt(`9.8`) === 10); // false
// console.log(4 != `4`);
// console.log(4 !== `4`);
// console.log(!(4>3));
// console.log(`dragon`.includes(`on`));
// console.log(`python`.includes(`on`));


// Calculate how many seconds a user can leave


// const totalYearsPersonLive = Number(prompt(`Enter number of years you live on earth`));
// const secondsInAYear = 365*24*60*60;
// console.log(`Total seconds a person can leave: ${secondsInAYear * totalYearsPersonLive}`);