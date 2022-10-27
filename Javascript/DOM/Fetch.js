let createNode = element => document.createElement(element)

let append = (parent,child) => parent.appendChild(child)

const allusersList=document.querySelector("#allitems")


fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(res_json=> {
    console.log(res_json);
    let users=res_json
   return users.map(ele=>{
        li=createNode("li")
        h2=createNode("h2")
        p=createNode("p")
        p2=createNode("p")
        append(li,h2)
        append(li,p)
        append(li,p2)
        append(allusersList,li)
          h2.innerText=`${ele.username}`
          p.innerText=`${ele.address.city}`
          p2.innerText=`${ele.company.name} and website is ${ele.website}`

   }) 
})

.catch(error => console.log(`Error occured - ${error}`))