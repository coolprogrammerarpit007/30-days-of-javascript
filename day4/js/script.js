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
//   case `december`:
//   case `january`:
//   case `feburary`:
//     console.log(`Winter`);
//     break;

//   case `march`:
//   case `april`:
//   case `may`:
//     console.log(`Spring`);
//     break;

//   case `june`:
//   case `july`:
//   case `august`:
//     console.log(`Summer`);
//     break;

//   case `september`:
//   case `october`:
//   case `november`:
//     console.log(`Autumn`);
//     break;

//   default:
//     console.log(`You Enter a wrong value!`);
  
// }

// Condition for the leap year

// finding the leap year condition 

let flag = false;
const leapYear = function(year){

  // condition to check the leap year
  if(year % 100 === 0 ){
    if(year % 400 === 0){
      flag = true;
    }
  }

  else if(year % 4 === 0){
    flag = true;
  }

  else{
    flag = false;
  }

  return flag;
}

// console.log(leapYear(1990))


