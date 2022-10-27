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

/////////////////////////////////////////////// 

document.getElementById("content").addEventListener("click",function(){
    // document.querySelector("#content").align = "right"
    document.querySelector("#content").style="text-align:right"
})
///////////////////////////////////

document.querySelector("#heading3").addEventListener("dblclick", ()=> {
    document.getElementById("heading3").style="border:2px red solid;font-size:40px;color: brown"
    document.getElementById("heading3").innerText="Welcome"
   
})

document.getElementById("heading3").addEventListener("click",function(){
    document.getElementById("image").style="border:2px green solid;height:100px;width:100px"
    document.getElementById("image").src="b_img3.jpg"
})



