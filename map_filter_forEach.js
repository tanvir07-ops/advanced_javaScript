// map,filter,forEach ei gula iteration er jonne use kora hoy jemon loop er moto:

// and eigula array niyei kaaj kore mane array thekei iteration kore:

// map(eti ekti array return kore):

// const numbers = [1,2,3,4,5,6];

// const val = numbers.map(function(number){
  

//   return number*number;

// })

// console.log(val);




// map using arrow function:

//  const numbers = [1,2,3,4,5,6];
//  const val = numbers.map(x => x<1)

//  console.log(val)


// filter(eita map er motoi but kono condition jdi match nah kore tahole simply faka [] return kore dey!)


// const numbers = [1,2,3,4,5];

// const val = numbers.filter(x => x<1)
// console.log(val);




// find:(eita shudu number ta return korbe not array):
// ar find er kaaj holo condition match korle jdi multiple numbers thake tahole shudud first number tay return kore dibe! jemon eikhane 1 er cheye boro hocceh 2,3,45 but only 2 return koreche!

const numbers = [1,2,3,45];
const val = numbers.find(x => x>1)
console.log(val);










