document.body.addEventListener("click",(e)=>{
    // alert("target clicked")
    // console.log(e.target)

    if (e.target.className.includes("add-cart")) {
        // console.log(e.target)
        // console.log(e.target.parentNode)
var item=e.target.parentNode.cloneNode(true)
// console.log(item);
var modifiedItem=item.querySelector("button")
// console.log(modifiedItem);
modifiedItem.textContent="Delete"
modifiedItem.classList="btn btn-primary btn-sm mt-1 remove-cart"

document.querySelector("#cart").appendChild(item)

e.target.classList="btn btn-primary btn-sm mt-1"
    }
})

document.body.addEventListener("click",function(e){
    if(e.target.className.includes("remove-cart")){
        console.log(e.target.parentNode);

        document.querySelector("#cart").removeChild(e.target.parentNode)
    }
})