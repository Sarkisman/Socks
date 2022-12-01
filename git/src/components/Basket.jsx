import React, { useState, useEffect } from 'react';
import Sock from './Sock';

export default function Basket() {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/basket/bas')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  const basketHandler = (id) => {
    fetch(`/basket/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => setUserSocs(
        (prev) => prev.map((el) => (el.id === id ? { ...el, bascetSt: !el.bascetSt } : el)),
      ));
  };
  const likeHandler = async (id) => {
    fetch(`/basket/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then(() => setUserSocs(
        (prev) => prev.map((el) => (el.id === id ? { ...el, favorSt: !el.favorSt } : el)),
      ));
  };
  const orderHandler = () => {
    fetch('/basket/order', {
      method: 'DELETE',
    })
      .then((res) => res.json());
  };
  return (
    <>
      <div style={{ height: '100%' }} className="d-flex justify-content-center flex-wrap flex-row">
        <div className="mt-2 d-flex flex-wrap">
          {userSocs?.map((el) => el.bascetSt && (el.favorSt === false ? (
            <div className="card border-0 m-1">
              <div key={el.id} className="">
                <Sock inputs={el} />
              </div>
              <button className="constructor-button" type="button" onClick={() => basketHandler(el.id)}>УБРАТЬ ИЗ КОРЗИНЫ</button>
              <button className="constructor-button" type="button" onClick={() => likeHandler(el.id)}>ЛАЙК!</button>
            </div>
          ) : (
            <div className="card border-0 m-1">
              <div key={el.id} className="">
                <Sock inputs={el} />
              </div>
              <button className="constructor-button" type="button" onClick={() => basketHandler(el.id)}>УБРАТЬ ИЗ КОРЗИНЫ</button>
              <button className="constructor-button" type="button" onClick={() => likeHandler(el.id)}>ДИЗЛАЙК!</button>
            </div>
          )
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <button type="button" className="constructor-button m-1" onClick={orderHandler}>Заказать</button>
      </div>
    </>
  );
}
