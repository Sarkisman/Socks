import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Basket from './Basket';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Reg from './Reg';
import Favourites from './Favourites';
import SockForm from './SockForm';

export default function App({ user, userSocs }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/favourites" element={<Favourites userSocs={userSocs} />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
        <Route path="/basket" element={<Basket userSocs={userSocs} />} />
        <Route path="/sockgen" element={<SockForm user={user} />} />
      </Routes>
      <br />
    </div>
  );
}
