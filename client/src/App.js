import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React,{useEffect} from 'react';
import Home from './pages/Home/Home';
import Coursepg from './pages/Coursespg/Coursepg';
import Aos from "aos"
import Login from './pages/Login/Login';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/courses" element={<Coursepg />}></Route>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
