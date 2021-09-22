// for undefined:
// first:

let name;
console.log(name);


// second:
function add(x,y){
    console.log(x+y);
}

console.log(add(1));


// third:
function sum(x,y){
    return x+y;
}

console.log(sum(1))


// fourth:
const arr = [1,2,3];
console.log(arr[5]);

// fifth:
const person = {
    name : "Tanvir Rifat",
    email : "Tanvir.Rifat@gmail.com",
}

console.log(person.gmail);



// for null:
let string = "";
if(string){
    console.log("Name has Tanvir Rifat");
}

else{
   string = null;
   console.log(string);
}










