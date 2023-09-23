import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Profile from "./pages/Profile/Profile";
import Coursepg from "./pages/Coursespg/Coursepg";
import Aos from "aos";
import Login from "./pages/Login/Login";
import Blogpg from "./pages/Blogpage/Blogpg";
import Home from "./pages/Home/Home";
import Event from "./pages/Eventpg/Event";
import Chat from "./pages/Chat/Chat";
import Videos from "./pages/Videospg/Videos";
import Signup from "./pages/Login/Signup";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/courses" element={<Coursepg />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/blogs" element={<Blogpg />}></Route>
            <Route exact path="/event" element={<Event />}></Route>
            <Route exact path="/chat" element={<Chat />}></Route>
            <Route exact path="/videos" element={<Videos />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
