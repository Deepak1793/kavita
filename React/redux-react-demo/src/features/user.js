import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:{
       value:{
        name:"",
        age:0,
        company:""
       }
    },
    reducers:{
        // login:(state,action)=>{

        // }
    }
})


export default userSlice.reducer