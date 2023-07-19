import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice=createSlice({
    name:"employee",
    initialState:{value:{
        name: "",
        age: 0,
        location: "",
        details: {
          role: "",
          joined: "",
        }
    }},
    reducers:{
        getEmployeeData:(state,action)=>{
         state.value=action.payload;
        }
    }
})
export const {getEmployeeData}=employeeSlice.actions;

export default employeeSlice.reducer;