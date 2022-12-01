import React, { useEffect, useState } from 'react';
import Sock from './Sock';

export default function Favourites() {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/favourites/fav')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  const patchHandler = async (id) => {
    const res = await fetch(`/favourites/${id}`, { method: 'PATCH' });
    if (res.ok) {
      setUserSocs([...userSocs.filter((el) => el.id !== id)]);
    }
  };
  const basketHandler = async (id) => {
    const res = await fetch(`/basket/${id}`, { method: 'PATCH' });
    if (res.ok) {
      setUserSocs([...userSocs.filter((el) => el.id !== id)]);
    }
  };
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="mt-2 d-flex justify-content-between flex-wrap">
        {userSocs?.map((el) => (
          <div key={el.id} className="card border-0 m-1">
            <div>
              <Sock inputs={el} />
            </div>
            <button className="constructor-button" type="button" onClick={() => basketHandler(el.id)}>В КОРЗИНУ</button>
            <button className="constructor-button" type="button" onClick={() => patchHandler(el.id)}>ДИЗЛАЙК!</button>
          </div>
        ))}
      </div>
    </div>
  );
}
