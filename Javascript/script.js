// // document.write("<h1>Javascript</h1>");
// console.log("This is console")
// console.log("External javascript");

// let userAge = 50
// console.log(userAge);
// // document.write(userAge)

// // console.log(typeof userAge);

// // document.write(typeof userAge)

// userAge = true // global scope
// console.log(userAge);
// console.log(typeof userAge);

// const pi = 3.14
// console.log(pi);

// // pi=20
// // console.log(pi);

// var userName = "Kavitha" 
// console.log("The user name is "+ userName + " and user age is "+ userAge);

// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// console.log(userName.charAt(2));
// console.log(userName.indexOf("i"));



// // var futureJob = undefined;
// var futureJob;

// console.log(futureJob);
// console.log(typeof futureJob);

// var data = null
// console.log(data);
// console.log(typeof data);


// var key = Symbol('mySymbol'); 
// console.log(key);
// console.log(typeof key);

// var weight = '50.3'
// console.log(weight);
// console.log(typeof weight);

// var data1 = Number(weight)

// console.log(Number(weight)); 
// console.log(typeof Number(weight));

// console.log(Number.parseFloat(weight));



// var data2=Number(userName)
// console.log(data2);

// var b=2  
// var a = 5          //b=1
// // var a = b--
// // console.log(a);


// // var c = ++b - b-- + --a - a++ + a-- - --b  

// //b=3
// //      // 2
// var c = b++

// //b=3
// //       3
// var c2 =++b

// console.log(c); //4
// console.log(a);//4
// console.log(b);//1


// var x=5
// //x=5
// //     5 -  5    +  6 - 6
// var z= x++ - --x + ++x - x--

// console.log(z); // 1 0 3 
// console.log(x);// 5

// console.log("3"==3); //checks only not type

// console.log("3"=== 3); //checks both value and type

// console.log(2>3);


// console.log(2+ "3")


// var b = 2
// var a = 5

// // b = 1
// //a = 4

// //     3  - 3    + 4   - 4   + 5  -  1
// var c= ++b - b-- + --a - a++ + a-- - --b  


// m= 3   //m=4
//  //3
// n = m++ 

// //n=3
// //m=4

// //Ternary operator - 3 operands (?:)

// // (Expression)? statement1 : statement2
//      // true --> statement1 
//      // false -->statement2

// var value = (2>3)? "Value1": "Value2"

// console.log( "The value is "+ value);

// //             true
// var data3 = (5=="5")? (2>3):(5<2)
// console.log( "The value of data3 is "+ data3);
// console.log(`The value of data3 is ${data3}`);

// console.log(`The value of data3 is ${data3} and value is ${value}`);

// var result = 3+4*5 
// console.log(`The value of result is ${result}`);


// var exp2 = 4*3**2
// console.log(`The value of exp2 is ${exp2}`);

// var exp3 = 5**2+2*3-4  //25 +2*3-4 //25+6-4 L----->R //27
// console.log(`The value of exp3 is ${exp3}`);

// var exp4 = 1**2**3   //L<----R //1**8 //1
// console.log(`The value of exp4 is ${exp4}`);


// //Control structures

// var weight= 80

// if (weight<50) {
//     console.log(`Light weight`);
// }
// //         t        &&   t
// else if(weight >=50 && weight <=75){
//   console.log(`Normal weight`);
// }
// else{
//     console.log("Over weight");
// }

// //switch

// var option = 'a'

// switch (option) {
//     case 'n':
//         console.log("BMW");
//         break
//     case 'a':
//         console.log("Benze")
//         break
//     default:
//         console.log("Santro");
//         break;
// }

// //loops

// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");

// console.log("__________________________");
// //while

// var value=0  //6
// while (value<5) {
//     console.log(value); //0 1 2 3 4 5
//     console.log("Welcome");
//     value ++
// }

// console.log("____________________________");
// //Do-while
// var value1 = 0 //4
// do {
//     console.log(value1); // 0 1 2 3
//     value1 ++
     
// } while (value1 <=3);




// var value3 = 5 //
// do {
//     console.log(value3); //5
//     value3 ++
     
// } while (value3 <=3);

// //  1. initialization ; 2. condition check ;4. updation 3.Execution of for-loop
// for (let index = 0; index <=3; index++) {
//    console.log("Hello"); 
//    break;
     
// }

// for (var i = 1; i <= 3; i++) {
//     if (i===2) {  // 
//          continue; // stop current iteration
//     }
//     console.log(i); //1 3
// }

var a,b;
//          3
outerLoop:
for (let a = 0; a < 3; a++) {
    var b=0
    while (b<3) {
        if (a===1 && b===1) {
            continue outerLoop
        }
        console.log(`a= ${a} and b= ${b}`);
        b++
    }
}
 // 0 0
 // 0 1
 //0 2
 // 1 0
 //2 0
 //2 1
 //2 2

 




































