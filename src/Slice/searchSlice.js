import { createSlice } from "@reduxjs/toolkit";

 const initialState={
     "current":"",
     "forecast":""
 }

export const searchSlice=createSlice({
name:"search",
initialState,
reducers:{
    handleCurrentWeather:(state,action)=>{
        state.current=action.payload  
       
    },
    handleForecastWeather:(state,action)=>{
        state.forecast=action.payload
    }

}

})

export const {handleCurrentWeather,handleForecastWeather}=searchSlice.actions
export default searchSlice.reducer 