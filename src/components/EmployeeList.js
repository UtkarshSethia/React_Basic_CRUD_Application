import React, { useState } from "react";
import { BasicAccordion } from "./Accordian";
import { useSelector } from "react-redux";
import { Context } from "../App";
import "../App.css";

export default function EmployeeList() {
  const [searchEmployee, setSearchEmployee] = useState("");
  const employeeList = useSelector((state) => state.employeeList.value);
  console.log(employeeList);
  return (
    <div className="card_cont">
      <Context.Consumer>
        {(res) => {
          setSearchEmployee(res.searchList);
        }}
      </Context.Consumer>{" "}
      Employee List
      <br />
      {employeeList &&
        employeeList
          .filter((item) => {
            return searchEmployee.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(searchEmployee.toLowerCase());
          })
          .map((item, index) => {
            return (
              <>
                <div key={index} className="card">
                  <span className="name">{item.name}</span>
                  <div className="info">
                    <div>
                      Age- {item.age} , Location- {item.location}
                    </div>
                  </div>
                  <BasicAccordion details={item.details} />
                </div>
              </>
            );
          })}
    </div>
  );
}
