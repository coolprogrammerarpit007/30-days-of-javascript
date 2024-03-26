`use strict`;

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let grade = Number(prompt("Enter grades of a student: "));

// if (grade >= 80 && grade <= 100) {
//   console.log("Grade: A");
// } else if (grade >= 70 && grade < 80) {
//   console.log("Grade: B");
// } else if (grade >= 60 && grade < 70) {
//   console.log("Grade: C");
// } else if (grade >= 50 && grade < 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// const season = prompt("Enter season: ").toLowerCase();

// switch (season) {
//   case "september":
//   case "october":
//   case "november":
//     console.log(`Season is Autumn`);
//     break;
//   case "december":
//   case "january":
//   case "feburary":
//     console.log(`Season is Winter`);
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log(`Season is Spring`);
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log(`Season is Summer`);
//     break;
//   default:
//     console.log("Unknown Season ");
// }

// Condition for the leap year

let year = Number(prompt("Enter Year "));
let leapYear = false;

if (year % 4 === 0 && year % 100 !== 0) {
  leapYear = true;
} else if (year % 400 === 0) {
  leapYear = true;
} else {
  leapYear = false;
}

console.log(`Generate Leap Year: ${leapYear}`);

let month = prompt("Enter Month: ").toLowerCase();

switch (month) {
  case "january":
    console.log("January has 31 days");
    break;
  case "feburary":
    console.log(`Feburary has ${leapYear ? 29 : 28} days`);
    break;
  case "march":
    console.log(`March has 31 days`);
    break;
  case "april":
    console.log(`April has 30 days`);
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("June has 30 days");
    break;
  case "july":
    console.log(`July has 31 days`);
    break;
  case "august":
    console.log(`August has 31 days`);
    break;
  case "september":
    console.log(`September has 30 days`);
    break;
  case "october":
    console.log(`October has 31 days`);
    break;
  case "november":
    console.log(`November has 30 days`);
    break;
  case "december":
    console.log(`December has 31 days`);
    break;
  default:
    console.log(`Unknown Month`);
}

// const greeting = () => {
//   alert("Hello World!");
// };

// setTimeout(greeting, 3000);

// setInterval(greeting, 3000);
