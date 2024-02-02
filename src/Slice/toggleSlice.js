import { createSlice } from "@reduxjs/toolkit";

 const initialState={
     "value":"false",
     
 }

export const toggleSlice=createSlice({
name:"toggle",
initialState,
reducers:{
    handleValue:(state,action)=>{
        state.value=action.payload  
       
    }

}

})

export const {handleValue}=toggleSlice.actions
export default toggleSlice.reducer 