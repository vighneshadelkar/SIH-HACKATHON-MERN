import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect, useMemo,useState } from 'react';
import Profile from './pages/Profile/Profile';
import Coursepg from './pages/Coursespg/Coursepg';
import Aos from "aos"
import Login from './pages/Login/Login';
import { AuthContext } from './context/AuthContext';
import Blogpg from './pages/Blogpage/Blogpg';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);


  const [AuthUser, setAuthUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const userMemo = useMemo(() => ({ AuthUser, setAuthUser, isLoggedIn, setisLoggedIn }), [AuthUser, setAuthUser, isLoggedIn, setisLoggedIn]);


  return (
    <div className="App">
      <AuthContext.Provider value={userMemo}><BrowserRouter>
        <Routes>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/courses" element={<Coursepg />}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/blogs" element={<Blogpg />}></Route>
        </Routes>
      </BrowserRouter></AuthContext.Provider>

    </div>
  );
}

export default App;
