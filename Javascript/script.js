// document.write("<h1>Javascript</h1>");
console.log("This is console")
console.log("External javascript");

let userAge = 50
console.log(userAge);
document.write(userAge)

// console.log(typeof userAge);

// document.write(typeof userAge)

userAge = true // global scope
console.log(userAge);
console.log(typeof userAge);

const pi = 3.14
console.log(pi);

// pi=20
// console.log(pi);

var userName = "Kavitha" 
console.log("The user name is "+ userName + " and user age is "+ userAge);

console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.charAt(2));
console.log(userName.indexOf("i"));



// var futureJob = undefined;
var futureJob;

console.log(futureJob);
console.log(typeof futureJob);

var data = null
console.log(data);
console.log(typeof data);


var key = Symbol('mySymbol'); 
console.log(key);
console.log(typeof key);

var weight = '50.3'
console.log(weight);
console.log(typeof weight);

var data1 = Number(weight)

console.log(Number(weight)); 
console.log(typeof Number(weight));

console.log(Number.parseFloat(weight));



var data2=Number(userName)
console.log(data2);

var b=2  
var a = 5          //b=1
// var a = b--
// console.log(a);


// var c = ++b - b-- + --a - a++ + a-- - --b  

//b=3
//      // 2
var c = b++

//b=3
//       3
var c2 =++b

console.log(c); //4
console.log(a);//4
console.log(b);//1


var x=5
//x=5
//     5 -  5    +  6 - 6
var z= x++ - --x + ++x - x--

console.log(z); // 1 0 3 
console.log(x);// 5

console.log("3"==3); //checks only not type

console.log("3"=== 3); //checks both value and type

console.log(2>3);


console.log(2+ "3")






























