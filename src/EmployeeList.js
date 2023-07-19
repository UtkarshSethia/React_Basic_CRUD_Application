import React from 'react'
import {BasicAccordion} from './components/Accordian';
import { useSelector } from "react-redux/es/hooks/useSelector";
import './App.css'

export default function EmployeeList() {
  const employeeList = useSelector((state) => state.employeeList.value);
  const filterList = useSelector((state) => state.filterList.value);
  console.log(filterList)
  return (
    <div className='card_cont'> Employee List
    <br/>
  
    { filterList.length<employeeList.length ? filterList.map((item, index) => {
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
        })
:

    employeeList.length==0 ? <p> No Records</p>: employeeList.map((item, index) => {
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
  )
}
