`use strict`;

// for of loop: we use for of loop over array, if we do not care about index.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

// Exercise: level 1

// const num = Number(prompt(`Enter number: `));

// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(`#`);
//   }
//   console.log(`\n`);
// }

// const table = Number(prompt("Enter number: "));

// for (let i = 1; i <= table; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const randomArr = [];

// for (let i = 0; i < 5; i++) {
//   randomArr.push(Math.round(Math.random() * 20));
// }

// console.log(randomArr);

// Generatig an array of 5 numbers and numbers must be unique

// const randomArr = [];
// while (randomArr.length < 5) {
//   let randomNum = Math.round(Math.random() * 9);
//   if (randomArr.indexOf(randomNum) === -1) {
//     randomArr.push(randomNum);
//   }
// }

// console.log(randomArr);

// Gererate a six character random ID Unique

// let randomStr = ``;
// const chars = `abcdefghijklmnopqrstuvwxyz0123456789`;
// // let char = chars.charAt(Math.round(Math.random() * chars.length));

// while (randomStr.length < 6) {
//   let char = chars.charAt(Math.round(Math.random() * chars.length));
//   randomStr += char;
// }
// console.log(randomStr);

// Develop a script which generate any number of characters random ID

// let chars = `abcdefghijklmnopqrstuvwxyz0123456789`;
// const length = Math.round(Math.random() * 10) + 5;
// // Above script will generate a random number b/w 5 to 15 randomally

// let randomStr = ``;
// while (randomStr.length < length) {
//   let randomLetter = chars.charAt(Math.round(Math.random() * chars.length));
//   if (!randomStr.includes(randomLetter)) {
//     randomStr += randomLetter;
//   }
// }
// console.log(randomStr);

// write a script which generates a random hexadecimal Number

let hexadecimalChars = `0123456789abcdef`;

// let hexCode = ``;
// while (hexCode.length < 6) {
//   let randomChar = hexadecimalChars.charAt(
//     Math.round(Math.random() * hexadecimalChars.length)
//   );
//   hexCode += randomChar;
// }

// console.log(`Random hex code: #${hexCode}`);

// Generate a script which generates a random rgb color value

// const red = Math.round(Math.random() * 256);
// const green = Math.round(Math.random() * 256);
// const yellow = Math.round(Math.random() * 256);

// console.log(`Random rgb color value: rgb(${red},${green},${yellow})`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// function to find the max length
const maxLength = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// function to find the maximum string
let lengthOfCountries = [];
for (const country of countries) {
  lengthOfCountries.push(country.length);
}
const highestString = (countries) => {
  let highest = maxLength(lengthOfCountries);
  return countries[lengthOfCountries.indexOf(8)];
};

console.log(highestString(countries));
// const updatedCountries = [...countries]; // Copying the countries array

// // for (country of updatedCountries) {
// //   console.log(`Country: ${country}`);
// // }

// const sortedCountries = updatedCountries.sort();
// // console.log(sortedCountries);
// // console.log(countries);

// // const largestLengthCountry = (countries) => {
// //   let maxCountry = countries[0];
// //   for (country of countries) {
// //     console.log()
// //     if (maxCountry < country) {
// //       maxCountry = country;
// //     }
// //   }

// //   return maxCountry;
// // };
// //
// // console.log(largestLengthCountry(sortedCountries));
