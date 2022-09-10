import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Index from './pages/index/Index';
import AuthTesting from "./pages/testing/authroutes";

import Proyects from "./pages/Proyects/Proyects";
import MySkills from "./pages/MySkills/MySkills";

function App() {
  return(
  
      <BrowserRouter >
    <Routes>
      <Route index element={<Index/>}/>
      <Route path='pagina_priv' element={< AuthTesting/>}/>
      <Route path='projects' element={<Proyects/>}/>
      <Route path='my_skills' element={<MySkills/>}/>
    </Routes>
    </BrowserRouter >
    
  );
}

export default App;
