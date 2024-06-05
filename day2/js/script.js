`use strict`;

let str = `JavaScript`;

// Leverl1 Exercise

console.log(`Level 1 Exercise`);

let challenge = `30 Days of JavaScript`;
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0,2));
// console.log(challenge.includes(`Script`));
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(`,`));
// console.log(challenge.replace(`JavaScript`,`Python`));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(`J`));
// console.log(challenge.indexOf(`a`));
// console.log(challenge.lastIndexOf(`a`));
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf(`because`));
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf(`because`));
// console.log('You cannot end a sentence with because because because is a conjunction'.search(`because`));
// console.log( ' 30 Days Of JavaScript '.trim());
// console.log(`30 Days Of JavaScript`.startsWith(`30 Days Of JavaScript`));
// console.log(`30 Days Of JavaScript`.endsWith(`30 Days Of JavaScript`));
// console.log(`30 Days Of JavaScript`.match(`a`));
// console.log(`30 days of`.concat(`Nodejs`));
// console.log(`30 days of JavaScript `.repeat(5));



// ***********************************************************
// ***********************************************************

// console.log(`***********************************************`);
// console.log(`***********************************************`);
// console.log(`Exercise Level - 2`);
// console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// console.log(+`10` === 10);
// console.log(Math.round(parseFloat(`9.8`)) === parseFloat(10));
// console.log(`python`.includes(`on`));
// console.log(`I hope this course is not full of jargon`.includes(`jargon`));
// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(Math.random() * 50) + 51);
// console.log(Math.floor(Math.random() * 256) );

// let language = `javascript`;
// let index = Math.floor(Math.random() * language.length);
// console.log(language[index]);
// console.log(`1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125`);


// let conjuction = `You cannot end a sentence with because because because is a conjunction`;
// console.log(conjuction.indexOf(`because`));
// console.log(conjuction.lastIndexOf(`because`));
// console.log(conjuction.substring(31,47));

// const newArray = conjuction.match(/because/gi);
// console.log(newArray.length);


// *************************************************************************
// *************************************************************************

// Exercise Level -3

// const loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;

// const loveArr = loveStr.match(/love/gi);
// console.log(loveArr.length);

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// // replace all special keyword from the sentenct array
// const updatedSentence = sentence.replace(/[!@#$%^&*;,.?]/g,"");
// console.log(updatedSentence);
// // finding the most common word

// const senetnceArr = updatedSentence.split(' ');
// // console.log(senetnceArr);

// const wordsObj = {};


// // Itterating over the updatedArr

// senetnceArr.forEach((word) =>{
//     // checking if word is already in the wordObj object.

//     if(word in wordsObj){
//         wordsObj[word] = wordsObj[word] + 1;
//     }
//     else{
//         wordsObj[word] = 1;
//     }
// })

// // now finding the most common word
// let frequestWord = ``;
// let largest = 0;

// for(word in wordsObj){
//     if(wordsObj[word] > largest){
//         largest = wordsObj[word]
//         frequestWord = word;
//     }
// }


// console.log(`${frequestWord}:${largest}`);


// const earningArray = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// const numbers = earningArray.match(/\d+/g);// getting numbers form the string
// const totalIncome = numbers.reduce((total,number)=>{
//     return total + Number(number)
// },0)

// console.log(totalIncome);

// console.log(`He earns Annually: ${Number(numbers[0] * 12 + Number(numbers[1]) + Number(numbers[2]) * 12)}`);