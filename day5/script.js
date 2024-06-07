`use strict`;

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  `India`
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// level1 Exercise

// const arr = [];
// const arr1 = [1,2,3,4,5];
// console.log(arr1.length);

// console.log(arr1[0]);
// console.log(arr1[arr1.length-1]);
// console.log(arr1[parseInt(arr1.length/2)]);

// const itCompanies = [`Google`,`Microsoft`,`Amazon`,`Netflix`,`Nvidia`]

// console.log(itCompanies);
// console.log(itCompanies.length);

// itCompanies.forEach((company)=>{
//   console.log(company.toUpperCase());
// })


// console.log(itCompanies.includes(`Google`));

// // filter out companies which includes `o` in the company


// const techGiants = itCompanies.filter((company)=>{
//   return company.includes(`o`);
// })

// console.log(techGiants);


console.log(countries);

// Dividing the country into the two equal parts


const length = countries.length;
const newCountries1 = [];
const newCountries2 = [];

// check if countries array is even or not

if(length%2 === 0){

  for(let i=0;i<countries.length;i++ ){
    if(i<length/2){
      newCountries1.push(countries[i]);
    }
    else{
      newCountries2.push(countries[i]);
    }
  }
}

console.log(newCountries1);
console.log(newCountries2);