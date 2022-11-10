//Default state object

const state={items:["Meeting at 10:00AM"]}

//Reducer

function reducer(initialState=state,action){
    switch (action.type) {
        case "GET":
            return initialState;
        case "ADD":
            initialState.items.push(action.payload)
            return initialState;
        case "REMOVE":
            initialState.items.splice(initialState.items.indexOf(action.payload),1)  
            return initialState;
        case "REMOVEALL":
            initialState.items.splice(0,initialState.items.length)
            return initialState;
        
    }
}

//Create store

const store = Redux.createStore(reducer,state)

const todolist=document.getElementById("todolist")


//Subcribe the actions

store.subscribe(()=>{
    const result=store.getState()
    todolist.innerHTML=""
    result.items.map(item=>{
         const li=document.createElement("li")
         li.className="list-group-item"
         li.innerHTML=`${item} <i class="bi bi-file-x float-end text-danger" onclick="RemoveItem('${item}')"></i>`
         todolist.appendChild(li)
         
    })
})

//Trigger action

store.dispatch({type:"GET"})

function AddItem() {
     const item=document.getElementById("txtItem").value
     store.dispatch({type:"ADD",payload:item})
}

function RemoveItem(item){
    store.dispatch({type:"REMOVE",payload:item})
}

function RemoveAllItems(){
    store.dispatch({type:"REMOVEALL"})
}