import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Basket from './Basket';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Reg from './Reg';
import Favourites from './Favourites';
import SockForm from './SockForm';
import Footer from './Footer';

export default function App({ user, socks }) {
  return (
    <div className="wrapper" style={{ height: '80vh' }}>
      <NavBar user={user} />
      <div style={{ minHeight: '60px' }} />
      <Routes>
        <Route path="/favourites" element={<Favourites socks={socks} />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
        <Route path="/basket" element={<Basket socks={socks} />} />
        <Route path="/sockgen"element={<SockForm user={user} />} />
        {/* <Route path="/" element={<SockForm user={user} />} /> */}
      </Routes>
      <Footer style={{ position: 'absolute', zIndex: '1000' }} />
    </div>
  );
}
