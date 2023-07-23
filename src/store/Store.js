import { createSlice } from "@reduxjs/toolkit";

export const employeeListSlice = createSlice({
  name: "employeelist",
  initialState: {
    initial: [
      {
        name: "Raj",
        age: 25,
        location: "New Delhi",
        details: {
          role: "Front End Developer",
          joined: "2022-01-01",
        },
      },
      {
        name: "Varun",
        age: 24,
        location: "Mumbai",
        details: {
          role: "Back End Developer",
          joined: "2023-05-01",
        },
      },
      {
        name: "Ram",
        age: 36,
        location: "Pune",
        details: {
          role: "Front End Developer",
          joined: "2023-07-10",
        },
      },
      {
        name: "Utkarsh",
        age: 22,
        location: "Pune",
        details: {
          role: "Front End Developer",
          joined: "2023-07-10",
        },
      },
      {
        name: "Aditya",
        age: 23,
        location: "Indore",
        details: {
          role: "Back End Developer",
          joined: "2023-07-10",
        },
      },
    ],
    value: [
      {
        name: "Raj",
        age: 25,
        location: "New Delhi",
        details: {
          role: "Front End Developer",
          joined: "2022-01-01",
        },
      },
      {
        name: "Varun",
        age: 24,
        location: "Mumbai",
        details: {
          role: "Back End Developer",
          joined: "2023-05-01",
        },
      },
      {
        name: "Ram",
        age: 36,
        location: "Pune",
        details: {
          role: "Front End Developer",
          joined: "2023-07-10",
        },
      },
      {
        name: "Utkarsh",
        age: 22,
        location: "Pune",
        details: {
          role: "Front End Developer",
          joined: "2023-07-10",
        },
      },
      {
        name: "Aditya",
        age: 23,
        location: "Indore",
        details: {
          role: "Back End Developer",
          joined: "2023-07-10",
        },
      },
    ],
  },
  reducers: {
    updatedEmployeeData: (state, action) => {
      state.value = action.payload;
    },
    renderInitialData: (state, action) => {
      state.initial = action.payload;
    },
  },
});
export const { updatedEmployeeData, renderInitialData } =
  employeeListSlice.actions;

export default employeeListSlice.reducer;
