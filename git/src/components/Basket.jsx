import React, { useState, useEffect } from 'react';
import Sock from './Sock';

export default function Basket({ user, newUserSocks }) {
  const [userSocs, setUserSocs] = useState([]);
  const [string, setString] = useState('');
  useEffect(() => {
    fetch('/basket/bas')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  console.log(userSocs);
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
    fetch(`/basket/order/${user.id}`, {
      method: 'POST',
    })
      .then(() => setUserSocs([]))
      .then(() => (userSocs === [] ? setString('Ваша корзина пуста. Выберите носки в генераторе носков') : setString(`Ваш заказ добавлен в очередь. На вашу почту ${user.email} отправлено письмо с деталями заказа.`)));
  };
  return (
    <>
      <div style={{ height: '100%' }} className="d-flex justify-content-center flex-wrap flex-row">
        <div className="mt-2 d-flex flex-wrap">
          {userSocs?.map((el) => el.bascetSt && (
          <div className="card border-0 m-1">
            <div key={el.id} className="">
              <Sock inputs={el} />
            </div>
            <button className="constructor-button" type="button" onClick={() => basketHandler(el.id)}>УБРАТЬ ИЗ КОРЗИНЫ</button>
            {!el.favorSt ? (<button className="constructor-button" type="button" onClick={() => likeHandler(el.id)}>ЛАЙК!</button>) : (<button className="constructor-button" type="button" onClick={() => likeHandler(el.id)}>ДИЗЛАЙК!</button>)}
          </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <button type="button" className="constructor-button m-1" onClick={orderHandler}>Заказать</button>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {string}
      </div>
    </>
  );
}
