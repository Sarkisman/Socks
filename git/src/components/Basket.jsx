import React, { useState } from 'react';
import Sock from './Sock';

export default function Basket({ socks }) {
  return (
    <div className="d-flex justify-content-center">
      {socks?.map((el) => <li key={el.id}><Sock inputs={el} /></li>)}
    </div>
  );
}
