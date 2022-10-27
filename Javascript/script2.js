// pop - up

// var alert=alert("Please upload the photo of size less than 100KB")
// console.log(alert);

// var data=confirm("Do you want to continue ?")
// console.log(`The value of data is ${data}`);


// var name=prompt("Enter your name")
// console.log(name);

//Arrays

var actor= ["SRK", "Hritik","Ranveer", "Ajay"]
console.log(actor);
console.log( typeof actor);

console.log(actor[0]); 
console.log(actor[1]);
console.log(actor.length);

//            1             
for (let index = 0; index < actor.length; index++) {
    console.log(actor[index]);
}

for (const iterator of actor) {
    console.log(iterator);//data
}

for (const key in actor) {
   console.log(key);//index
//    console.log(actor[key]);
}

actor[4]="Tom"
console.log(actor);

actor[0]="Chris"
actor[20]="Yash"
console.log(actor);
console.log(actor.length);

var data = [20,"Twenty", true, undefined, null ,[20,false]]
console.log(data);

//constructor approach

var actresses = new Array("Deepika","Kajol","Madhuri",true, 2000) //5
console.log(actresses);
delete actresses[4]

console.log(actresses);

var data2 = new Array(20,30,40)//3
console.log(data2.length);

var data1 = new Array(20) //1
console.log(data1);
console.log(data1.length);

var data3= new Array("Hello")
console.log(data3);
console.log(data3.length);

data1[30]="data"
console.log(data1);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4));
console.log(animals);

console.log("____________________________________");
//Functions

// var sum = 2+3
// console.log(sum);

//Normal function
//            2   ,   3
function add(value1,value2,value3,value4) {
    var sum=value1 + value2+ value3 - value4 
    console.log(sum);
}


// add(2,3)
add(5,5,3,2.33)

//Anonymous function
// function (value1,value2,value3,value4) {
//     var sum=value1 + value2+ value3 - value4 
//     console.log(sum);
// }

//Function Expression

var add2=function (value1,value2,value3,value4) {
    var sum=value1 + value2+ value3 - value4 
    console.log(sum);
}
add2(5,5,3,2.33)


//Arrow Function
var add3 = (value1,value2,value3,value4)=> {
    var sum=value1 + value2+ value3 - value4 
    console.log(sum);
}
add3(5,5,3,2.33)
add3(10,10,10,20)


function name1() {
   console.log("Function executed");
   var userName = "Kavya" 
   return userName
   console.log("User");

}

console.log(name1()); 
// var userInfo=name1()
// console.log(userInfo);


function multiply(x,y) {
    product= x*y
    console.log(product); //600
    return product
}

console.log(multiply(20,30)); 

userName = (a)=>{ return "Arrow function"}


console.log(userName(2)); 

//IIFE

(function (x,y) {
    product= x*y
    console.log(product); //600
})(20,3);

 ((x,y) => {
    product= x*y
    console.log(product); 
})(20,10)

// console.log(multiply1);

// (multiply1)(20,30)


//Call back function
function fan() {
    console.log("I am your fan");//1
}
//             23 , fan
function model(age,name) {
    name() // fan()
    console.log(`${age}`);//2
    console.log(`I am a famous model`);//3
}

model(23,fan)


//Asynchronous code

var a=1
var b=10


setTimeout(function(){
    console.log("Hello");
},5000)
 

console.log(a);
console.log(b);


