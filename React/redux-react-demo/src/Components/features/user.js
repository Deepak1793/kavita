import { createSlice } from "@reduxjs/toolkit";

const initialValue={
    name:"",
    age:0,
    company:"",
   }

const userSlice=createSlice({
    name:"user",
    initialState:{
       value:initialValue
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state,action)=>{
            // state.value=action.payload
            state.value=initialValue
        }
    }
})


export default userSlice.reducer
export const {login,logout}=userSlice.actions