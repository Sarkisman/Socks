import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Reg from './Reg';
import Favourites from './Favourites';

export default function App({ user, tracks, socks }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/favourites" element={<Favourites socks={socks} />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
      </Routes>
    </div>
  );
}
