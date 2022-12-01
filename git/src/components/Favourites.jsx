import React, { useState } from 'react';
import Sock from './Sock';

export default function Favourites({ socks }) {
  return (
    <div className="d-flex justify-content-center">
      <div>
        {socks.map((el) => (
          <div>
            <Sock />
            {el.color}
          </div>
        ))}
      </div>
    </div>
  );
}
