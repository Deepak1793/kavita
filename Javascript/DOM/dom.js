var data1=document.getElementsByClassName("para")[0].innerText
// console.log(data1);

// document.getElementById("heading").innerText= data1

// document.getElementById("heading").innerText = "This is new content"

// document.getElementById("heading").innerText = "This is new content"
// document.getElementsByClassName("para")[0].innerText = `${data1} and my brother is Manoj`

document.getElementById("heading").innerHTML = `<h2> This is new content</h2>`


//  display=()=> {
//     document.getElementById("name").innerText= `My name is Anu`
// }

// document.querySelector("#user-btn").addEventListener("click",display)

// function display() {
//     document.getElementById("name").innerText= `My name is Anu`
// }

///////////////////////////////////////////////////

document.querySelector("#user-btn").addEventListener("click", ()=> {
    document.getElementById("name").innerText= `My name is Anu`
})

///////////////////////////////////////////////////////// 

document.querySelector("#add").addEventListener("click",function(){
   var input1=Number( document.querySelector("#input1").value)
   console.log(typeof input1);
   var input2=document.getElementById("input2").value

   var sum = input1 + Number ( input2)

   document.getElementById("result").innerText = `${input1} + ${input2} = ${sum}`
})




