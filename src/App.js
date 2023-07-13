
import BasicAccordion from './Acc';
import './App.css';
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

function App() {
  //https://mocki.io/v1/e46f2d52-86fa-4e8a-896c-575a11ddbd64
const history=useNavigate();
  const data=[
    {
    "name":"Raj",
    "age":25,
    "location":"New Delhi",
    "details":{
      "role":"Software Engineer",
      "joined":2022
    }
  },
  {
    "name":"Varun",
    "age":24,
    "location":"Mumbai",
    "details":{
      "role":"Junior Software Engineer",
      "joined":2023
    }
  },
  {
    "name":"Amit",
    "age":30,
    "location":"Indore",
    "details":{
      "role":"Product Manager",
      "joined":2016
    }
  },
  {
    "name":"Ram",
    "age":36,
    "location":"Pune",
    "details":{
      "role":"Lead Software Engineer",
      "joined":2023
    }
  },
  {
    "name": "Sara",
    "age": 28,
    "location": "Bangalore",
    "details": {
      "role": "Data Analyst",
      "joined": 2019
    }
  }
  ,
  {
    "name": "Ayesha",
    "age": 32,
    "location": "Chennai",
    "details": {
      "role": "Senior Software Engineer",
      "joined": 2015
    }
  }
  ,{
    "name": "Priya",
    "age": 29,
    "location": "Hyderabad",
    "details": {
      "role": "UX Designer",
      "joined": 2020
    }
  }
  
  
  ]

  const[name,setName]=useState("")
  const[location,setLocation]=useState("")
  const[joined,setJoined]=useState("")
  const[age,setAge]=useState("")
  const[role,setRole]=useState("")
  const[deleteEmp,setIndex]=useState("")
  
  const[dataALL,setDataALL]=useState(data)

useEffect(()=>{

},[])

const formHandler=(e)=>{
  e.preventDefault();
 if(deleteEmp!==""){
  let updateData=dataALL;
  updateData[deleteEmp].name=name;
  updateData[deleteEmp].age=age;
  updateData[deleteEmp].details.role=role;
  updateData[deleteEmp].location=location;
  updateData[deleteEmp].details.joined=joined;
  setAge("")
setJoined("")
setLocation("")
setName("")
setRole("")
setIndex("")
 }

else{
  let newData={
    "name":name,
    "age":age,
    "location":location,
    "details":{
    "role":role,
    "joined":joined
    }
    
    
   
    
  }
  setDataALL([...dataALL,newData])

setAge("")
setJoined("")
setLocation("")
setName("")
setRole("")
setIndex("")
}
 }


 
 const deleteEmployee=()=>{
  let newEmployeeList= dataALL


newEmployeeList.splice(deleteEmp,1)

history('/')
setIndex("")
 }
 
 const editHandler=(index)=>{
  setAge(dataALL[index].age)
  setRole(dataALL[index].details.role)
  setLocation(dataALL[index].location)
  setJoined( dataALL[index].details.joined)
  setName(dataALL[index].name)
  console.log(deleteEmp)
 }

  return (
    <div className="App">
      <h2>CRUD Application</h2>
     
     <form onSubmit={formHandler}>
      <input required value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' type='text' />
      <input required value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='age' type='number' />
      <input required value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder='location' type='text' />
      <input required value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder='role' type='text' />
      <input required value={joined} onChange={(e)=>{setJoined(e.target.value)}} placeholder='joined' type='number' />
      <input  type='submit' />
     </form>
      <div className='card_cont'> 
      {dataALL.map((item,index)=>{
        if(item!==undefined){
        return(
          <>
          <div key={index} className='card'>
        <span className='name'>{item.name}</span>
        <div className='info'>
        <div>Age- {item.age} , Location- {item.location}</div>
        <div className='but_cont'><button onClick={()=>{editHandler(index); setIndex(index);}}  className='edi_button'>Edit</button><button onClick={()=>{deleteEmployee(); setIndex(index);}} className='del_button'>Delete</button></div>
        </div>
        <BasicAccordion details={item.details} />
      </div>
          </>
        )
      }
      })}
      </div>
      
      
      
    </div>
  );
}

export default App;
