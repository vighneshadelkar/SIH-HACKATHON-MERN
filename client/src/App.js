import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect} from 'react';
import Profile from './pages/Profile/Profile';
import Coursepg from './pages/Coursespg/Coursepg';
import Aos from "aos"
import Login from './pages/Login/Login';
import { AuthUserProvider } from '../src/context/AuthContext';
import Blogpg from './pages/Blogpage/Blogpg';
import Home from './pages/Home/Home';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <AuthUserProvider >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/courses" element={<Coursepg />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/blogs" element={<Blogpg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthUserProvider>
  );
}

export default App;
