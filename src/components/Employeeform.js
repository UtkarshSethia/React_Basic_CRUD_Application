import React from "react";
import "../App.css";
import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { updatedEmployeeData, renderInitialData } from "../store/Store";
import EmployeeList from "./EmployeeList";

export default function Employeeform() {
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    age: "",
    location: "",
    details: {
      role: "",
      joined: "",
    },
  });
  const scrollBottom = useRef();
  const ClearEmployeeForm = () => {
    setEmployeeData({
      name: "",
      age: "",
      location: "",
      details: {
        role: "",
        joined: "",
      },
    });
  };

  const employeeList = useSelector((state) => state.employeeList.value);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updatedEmployeeData([...employeeList, employeeData]));
    dispatch(renderInitialData([...employeeList, employeeData]));

    toast("Employee Data Added Successfully", { theme: "light" });

    ClearEmployeeForm();
  };

  return (
    <Box
      component="div"
      sx={{ p: 2, border: "1px dashed grey", m: 4, borderRadius: "10px" }}
    >
      <ToastContainer position="top-center" autoClose={2000} />

      <form className="form_" onSubmit={formHandler}>
        <TextField
          className="inp_box"
          required
          value={employeeData.name}
          onChange={(e) => {
            setEmployeeData({ ...employeeData, name: e.target.value });
          }}
          placeholder="name"
          type="text"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          className="inp_box"
          required
          value={employeeData.age}
          onChange={(e) => {
            setEmployeeData({ ...employeeData, age: e.target.value });
          }}
          placeholder="age"
          type="number"
          id="outlined-basic"
          label="Age"
          variant="outlined"
        />
        <TextField
          className="inp_box"
          required
          value={employeeData.location}
          onChange={(e) => {
            setEmployeeData({ ...employeeData, location: e.target.value });
          }}
          placeholder=""
          type="text"
          id="outlined-basic"
          label="Location"
          variant="outlined"
        />
        <TextField
          className="inp_box"
          required
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Role"
          variant="outlined"
          onChange={(e) => {
            setEmployeeData({
              ...employeeData,
              details: { ...employeeData.details, role: e.target.value },
            });
          }}
        >
          <MenuItem key={1} value="Front End Developer">
            Front End Developer
          </MenuItem>
          <MenuItem key={2} value="Back End Developer">
            Back End Developer
          </MenuItem>
        </TextField>
        <TextField
          className="inp_box"
          required
          value={employeeData.details.joined}
          onChange={(e) => {
            setEmployeeData({
              ...employeeData,
              details: {
                ...employeeData.details,
                joined: e.target.value.toString(),
              },
            });
          }}
          placeholder=""
          type="date"
          id="outlined-basic"
          variant="outlined"
        />

        <br />
        <Button
          onClick={() => {
            scrollBottom.current.scrollIntoView({ behavior: "smooth" });
          }}
          style={{ marginTop: "10px" }}
          size="large"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
      <EmployeeList />
      <div ref={scrollBottom}></div>
    </Box>
  );
}
