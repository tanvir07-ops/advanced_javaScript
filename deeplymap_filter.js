const students = [

  {id:1,name:"Tanvir Rifat"}, 
  {id:2,name:"Rafi"},
  {id:3,name:"rajin"},

]

// const res = students.map(function(student){

//   return student.name;
// })
// console.log(res);

// another way using arrow function and map:

// const result = students.map(s => s.id)
// console.log(result);


// using filter:
// jader id 1 er upore taderke filter kore deo:
const result = students.filter(s => s.id>1)

console.log(result);




// using for loop(array er moddeh print korao students der name ke):
const finalArray = [];
for(let i = 0; i<students.length; i++) {


    finalArray.push(students[i].name);
}

console.log(finalArray);
