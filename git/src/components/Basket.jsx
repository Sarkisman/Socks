import React, { useState } from 'react';

export default function Basket({ socks }) {
  return (
    <div>
      {socks.map((el) => el.basketSt
      && (<li><Sock color={el.color} pattern={el.pattern} img={el.img} /></li>))}
    </div>
  );
}
