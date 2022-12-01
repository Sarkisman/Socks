import React, { useState, useEffect } from 'react';
import Sock from './Sock';

export default function Basket() {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/basket/bas')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  const basketHandler = (e) => {
    console.log(e.target);
  };
  const likeHandler = (e) => {
    console.log(e.target);
  };
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="mt-2 d-flex justify-content-center flex-wrap">
        {userSocs?.map((el) => el.bascetSt && (
          <div className="card border-0 m-1">
            <div key={el.id} className="">
              <Sock inputs={el} />
            </div>
            <button className="constructor-button" type="button" onClick={basketHandler}>В КОРЗИНУ</button>
            <button className="constructor-button" type="button" onClick={likeHandler}>ЛАЙК!</button>
          </div>
        ))}
      </div>
      <button type="button" className="constructor-button m-1">Заказать</button>
    </div>
  );
}
