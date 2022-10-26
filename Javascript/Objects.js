// Sathish = {
//     age: 28,
//     surname: "Gowda",
//     areYouMarried: false,
//     work: function (organization) {
//         console.log(`I am Sathish and my age is ${this.age} and working in ${organization}`);
//         console.log(this);
//     }
// }
// console.log(Sathish);

// console.log(Sathish.age)
// console.log(Sathish['areYouMarried']);

// Sathish.work("Natwest")

// Sathish.areYouMarried=true

// Sathish.wifeName = "Anu"

// console.log(Sathish);

// delete Sathish.age

// console.log(Sathish);

// // delete Sathish

// // console.log(Sathish);

// console.log("child" in Sathish);

// // Sachin ={
// //     age:50,

// // }

/////////////////////////////////////////////// 
Sathish = {
    age: 28,
    surname: "Gowda",
    areYouMarried: false,
    child :{
     name: "Manoj",
     age:5
    },
    work: function (organization) {
        console.log(`I am Sathish and my age is ${this.age} and working in ${organization}`);
        console.log(this);
    }
}
console.log(Sathish);

console.log(Sathish.age)
console.log(Sathish['areYouMarried']);

Sathish.work("Natwest")

Sathish.areYouMarried=true

Sathish.wifeName = "Anu"

console.log(Sathish);

delete Sathish.age

console.log(Sathish);

console.log(Sathish.child.name);

Sathish.business = function () {
    console.log("He is a famous Businessman");
}

console.log(Sathish);

////////////////////////////////////////
//Object.create

elonMusk = Object.create(Object.prototype)
console.log(elonMusk);


elonMusk.age=44
elonMusk.company = "Tesla"
elonMusk.surname= "musk"

console.log(elonMusk);

elonMusk.business = function () {
    console.log("He is a famous Businessman");
}

delete elonMusk.company

delete elonMusk.business

console.log(elonMusk);

////////////////////////////////////////////// 
//Constructor function

function Bank(name, bname, ifsc_code, manager,country="India") {
    this.name = name
    this.branchName = bname
    this.ifsc = ifsc_code
    this.branchManager = manager
    this.country=country

    this.deposit = function () {
        console.log("Amount Deposited");
        console.log(this);
    }
}

var SBI=new Bank("SBI", "MS Building", 21312315621, "Akhil")
console.log(SBI);

SBI.deposit()
console.log(SBI.branchName);
console.log(SBI['ifsc']);

SBI.location = "Bangalore"
delete SBI.branchManager
console.log(SBI);



var canara = new Bank("Canara", "Peenya", 32454211312,"Manoj")
console.log(canara);

console.log(canara instanceof Bank);
// console.log(hsbc instanceof Bank);

////////////////////////////////////////// 
dog={
    name:"Mojo",
    age:2,
    breed:"Golden Retriever"
}

console.log(dog);

var JSON_data=JSON.stringify(dog)
console.log(JSON_data);

var JS_data=JSON.parse(JSON_data)
console.log(JS_data);

//////////////////////////////////////////////////////
// spread (...)
let arr1 = [1,2,3]
console.log(arr1);
console.log(...arr1);
let arr2 = [4,5,6]

let arr3= [...arr1,...arr2]
console.log(arr3);

//Rest (...)
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

animals.forEach(ele =>{
    console.log(ele);
})


function addAll(...numbers) {
    console.log(numbers);
    numbers.forEach(temp=>{
        console.log(temp);
    })
    
}

addAll(1,2,3)
///////////////////////////////////////////////
Pet_dog={
    name:"Mojo",
    age:2,
    breed:"Golden Retriever"
}
//Destructuring assignment of Object
let {name,age,breed}= Pet_dog
console.log(name);
console.log(age);
console.log(breed);



//Task
//1.Destructuring assignment of Arrays
//2.Create objects using literal, function constructor , class expression , class declaration


[15, 16, 17, 18, 19].reduce(
    (previous, current) => previous * current
   
  );

