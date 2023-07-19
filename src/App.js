import "./App.css";
import { filteredEmployeeData } from "./store/Filter";
import Employeeform from "./components/Employeeform";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Posts from "./components/Posts";
import { useDispatch } from "react-redux";

function App() {
  const employeeList = useSelector((state) => state.employeeList.value);
 const dispatch=useDispatch();

  const SearchList = (input) => {
    if (input.length >= 3) {
      let newData = employeeList.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      });
      dispatch(filteredEmployeeData(newData))
   
    } else if (input.length < 3 || input === "") {
      dispatch(filteredEmployeeData(employeeList))
    }
  };

  return (
    <div className="App">
      <Navbar SearchList={SearchList} />
      <Routes>
        <Route path="/posts" Component={Posts} />
        <Route path="/" Component={Employeeform} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
