import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Index from './pages/index/Index';
import AuthTesting from "./pages/testing/authroutes";

function App() {
  return (
    
      <BrowserRouter >
    <Routes>
      <Route index element={<Index/>}/>
      <Route path='pagina_priv' element={< AuthTesting/>}/>
    </Routes>
    </BrowserRouter >
    
  );
}

export default App;
