import React, { useState } from 'react';

export default function Basket({ socks }) {
  return (
    <div className='d-flex justify-content-center'>
      {socks.map((el) => el.basketSt
      && (<li key={el.id}><Sock inputs={el}/></li>))}
    </div>
  );
}
