import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./css/main.css";
import UserLogin from './view/UserLogin';

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/userlogin">userlogin</Link>
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
};
