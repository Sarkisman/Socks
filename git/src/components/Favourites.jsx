import React, { useEffect, useState } from 'react';
import Sock from './Sock';

export default function Favourites({ socks }) {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/favourites/fav')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  const deleteHandler = () => {
    fetch(`/favourites/:${socks.id}`, { method: 'UPDATE' })
      .then(() => {
        window.location.href = '/';
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        {userSocs?.map((el) => (
          <>
            <div key={el.id}>
              <Sock inputs={el} />
            </div>
            <button className="constructor-button" type="submit">В КОРЗИНУ</button>
            <button className="constructor-button" type="submit" id="deleteEntryButton" onClick={deleteHandler}>ДИЗЛАЙК!</button>
          </>
        ))}
      </div>
    </div>
  );
}
