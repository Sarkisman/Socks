import React, { useState } from 'react';
import Sock from './Sock';

export default function Favourites({ socks, likeHandler }) {
  const deleteHandler = () => {
    fetch(`/favourites/:${socks.id}`, { method: 'UPDATE' })
      .then(() => {
        window.location.href = '/';
      });
  };

  return (
    <div className="mt-1 d-flex justify-content-between flex-wrap">
      {socks.map((el) => el.favorSt && (
        <div className="card border-0 m-1 mt-3">
          <div>
            <Sock inputs={el} />
          </div>
          <button className="constructor-button" type="submit">В КОРЗИНУ</button>
          <button className="constructor-button" type="submit" id="deleteEntryButton" onClick={deleteHandler}>ДИЗЛАЙК!</button>
        </div>
      ))}
    </div>
  );
}
