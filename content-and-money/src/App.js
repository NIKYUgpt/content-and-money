import React, { useState } from "react";
import "./Clean.css";
import "./App.css";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <ul>
        <li><a href="/profile">Профиль</a></li>
        <li><a href="/profile">Выйти</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/Logout" element={<Logout />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
