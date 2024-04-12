import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JobOpenings from "./Components/jobOpenings";
import JobRoles from "./Components/jobRoles";
import Home from "./Home";




function App(){
  return <div>
    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route path='/' element={<Home />}></Route>
      <Route path='/roles' element={<JobRoles />}></Route>
      <Route path='/openings' element={<JobOpenings />}></Route>
 
      <Route></Route>
    </Routes>
    </BrowserRouter>
    
    
    </div>
}

export default App;