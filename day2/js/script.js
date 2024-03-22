console.log("Day 2 of 30days of javascript!");

// Generating a random number

// const randomNumber = (num) => {
//   return Math.floor(Math.random() * num) + 1;
// };

// console.log(randomNumber(10));

// Day2 Exercise
console.log(`**********************************************`);

// level 1 Challenges

// let challenge = "30 Days of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 2));
// console.log(challenge.substring(3));
// console.log(challenge.includes("Script"));
// console.log(challenge.split(" "));
// console.log(
//   "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
// );
// console.log(challenge.replace("JavaScript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt("J"));
// console.log(challenge.indexOf("a"));
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".indexOf(
//     "because"
//   )
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
//     "because"
//   )
// );

// console.log(
//   "You cannot end a sentence with because because because is a conjunction".search(
//     "because"
//   )
// );

// console.log(` 30 Days of JavaScript `.trim());
// console.log(challenge.startsWith("30"));
// console.log(challenge.endsWith("JavScript"));
// console.log(challenge.match(/a/gi));
// console.log("30 days of ".concat("challenge"));
// console.log(challenge.repeat(2));

console.log(`***************************************************************`);
console.log(`***************************************************************`);

// Day 2 Level -> 2 challenge

// console.log(
//   "The Quote 'There is no exercise better for the heart than reaching down and lifting people up' by John Holmes teaches us to help one another"
// );
// console.log(
//   "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
// );
// console.log(typeof +"10" == typeof 10);
// console.log(Math.round(parseFloat("9.8")) == 10.0);
// console.log("python".includes("on"));
// console.log("jargon".includes("on"));
// console.log("I hope this course is not full of jargon".includes("jargon"));
// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(Math.random() * 50) + 50);
// console.log(Math.floor(Math.random() * 256));
// let language = "JavScript";
// let randomStr = language.charAt(
//   Math.floor(Math.random() * language.length - 1)
// );
// console.log(randomStr);

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// console.log(`1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125`);

let sentence =
  "You cannot end a sentence with because because because is a conjunction";

// let start = sentence.indexOf("because");
// let last = sentence.lastIndexOf("because");

// console.log(start, last);
// console.log(sentence.substring(start, last + 8));

console.log(`*********************************************************`);

// Level 3 Challenges

console.log(
  `'Love is the best thing in this world. Some found their love and some are still looking for their love.'`.match(
    /love/gi
  ).length
);

console.log(sentence.match(/because/g).length);

const sentence1 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let regex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;
let newSentence = sentence1.replace(regex, "");
// console.log(newSentence);

let earning =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let numbers = earning.match(/\d+/g);
let totalSalary = 0;
totalSalary = +numbers[0] * 12 + +numbers[1] + +numbers[2] * 12;
console.log(`He earns ${totalSalary} euro per year`);
