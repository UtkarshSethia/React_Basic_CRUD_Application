import "./App.css";
import Employeeform from "./components/Employeeform";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Posts from "./components/Posts";

import { createContext } from "react";
const Context = createContext();
function App() {
  const [searchList, setSearchList] = useState(""); //for search list operation

  return (
    <div className="App">
      <Context.Provider value={{ searchList, setSearchList }}>
        <Navbar />
        <Routes>
          <Route path="/posts" element={<Posts></Posts>} />
          <Route path="/" Component={Employeeform} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
export { Context };
