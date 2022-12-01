import React, { useState } from 'react';
import Sock from './Sock';

export default function SockForm({ user }) {
//   const images = {
//     mask: '/newImage/mask.png',
//     alpaka: '/newImage/alpaka.png',
//     yoda: '/newImage/yoda.png',
//     duck: '/newImage/duck.png',
//     cactus: '/newImage/cactus.png',
//     patDot: '/newImage/patDot.png',
//     patMath: '/newImage/patMath.png',
//     patNight: '/newImage/patNight.png',
//     patTriangle: '/newImage/patTriangle.png',
//     yodaRadio: '/newImage/yodaRadio.png',
//     cactusRadio: '/newImage/cactusRadio.png',
//     duckRadio: '/newImage/duckRadio.png',
//     alpakaRadio: '/newImage/alpakaRadio.png',
//   };
//   const colors = {
//     white: '#ffffff',
//     pink: '#e553cb',
//     violet: '#7e42c2',
//     yellow: '#f0e81b',
//     lightGreen: '#19ef8D',
//     blue: '#197eef',
//     grey: '#afafaf',
//   };

  const [inputs, setInputs] = useState({ img: '/newImage/duck.png', color: '#f0e81b', pattern: '' });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/sockgen/postsock', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) { alert('Носок добавлен в корзину!'); }
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/sockgen/likesock', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) { alert('Носок добавлен в избранное!'); }
  };

  return (
    <div
      style={{
        height: '100%', zIndex: '100',
      }}
      className="container"
    >
      <h1 style={{ marginTop: '20px', marginLeft: '220px', fontSize: '60px' }}>🧦 КОНСТРУКТОР НОСКОВ 🧦</h1>
      <hr />
      <div style={{ width: '100%', height: '2px', backgroundColor: 'black' }} />
      <br />
      <div>
        <Sock inputs={inputs} style={{ display: 'block', marginRight: '10px' }} />
      </div>
      <form
        onSubmit={submitHandler}
        method="POST"
        action="/postsock"
        style={{
          position: 'absolute',
          width: '60vw',
          transform: 'translateX(40%) translateY(-90%)',
          display: 'block',
        }}
      >
        <h2 style={{ margin: '0 auto', transform: 'translateX(70px)' }}>выберите цвет ваших носков</h2>
        <div style={{ margin: '0 auto', transform: 'translateX(100px)' }} className="form_radio_group">
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-1" type="radio" name="color" value="#ffffff" />
            <label htmlFor="radio-1">белый</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-2" type="radio" name="color" value="#e553cb" />
            <label htmlFor="radio-2">розовый</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-3" type="radio" name="color" value="#7e42c2" />
            <label htmlFor="radio-3">фиолетовый</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-4" type="radio" name="color" value="#f0e81b" />
            <label htmlFor="radio-4">желтый</label>
          </div>
          <br />
          <div className="form_radio_group-item" style={{ marginLeft: '50px', marginTop: '5px' }}>
            <input onChange={changeHandler} id="radio-5" type="radio" name="color" value="#19ef8D" />
            <label htmlFor="radio-5">салатовый</label>
          </div>
          <div className="form_radio_group-item" style={{ marginTop: '5px' }}>
            <input onChange={changeHandler} id="radio-6" type="radio" name="color" value="#197eef" />
            <label htmlFor="radio-6">голубой</label>
          </div>
          <div className="form_radio_group-item" style={{ marginTop: '5px' }}>
            <input onChange={changeHandler} id="radio-7" type="radio" name="color" value="#afafaf" />
            <label htmlFor="radio-7">серый</label>
          </div>
        </div>

        <br />

        <h2 style={{ display: 'block', margin: '0 auto', transform: 'translateX(65px)' }}>выберите узор ваших носков</h2>

        <div style={{ display: 'block', margin: '0 auto', transform: 'translateX(40px)' }} className="form_radio_group_pattern">
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-8" type="radio" name="pattern" value="/newImage/patDot.png" />
            <label htmlFor="radio-8">горошек</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-9" type="radio" name="pattern" value="/newImage/patMath.png" />
            <label htmlFor="radio-9">математика</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-10" type="radio" name="pattern" value="/newImage/patNight.png" />
            <label htmlFor="radio-10">ночь</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-11" type="radio" name="pattern" value="/newImage/patTriangle.png" />
            <label htmlFor="radio-11">треугольники</label>
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-12" type="radio" name="pattern" value="" />
            <label htmlFor="radio-12">без узора</label>
          </div>
        </div>

        <h2 style={{ display: 'block', margin: '0 auto', transform: 'translateX(30px)' }}>выберите рисунок на ваших носках</h2>

        <div style={{ display: 'block', margin: '0 auto' }} className="form_radio_group_img">
          <div className="form_radio_group-item">
            <input
              onChange={changeHandler}
              id="radio-13"
              type="radio"
              name="img"
              value=""
            />
            <label htmlFor="radio-13" />
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-14" type="radio" name="img" value="/newImage/cactus.png" />
            <label htmlFor="radio-14" />
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-15" type="radio" name="img" value="/newImage/alpaka.png" />
            <label htmlFor="radio-15" />
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-16" type="radio" name="img" value="/newImage/duck.png" />
            <label htmlFor="radio-16" />
          </div>
          <div className="form_radio_group-item">
            <input onChange={changeHandler} id="radio-17" type="radio" name="img" value="/newImage/yoda.png" />
            <label htmlFor="radio-17" />
          </div>
        </div>
        <button className="constructor-button" type="submit">В КОРЗИНУ</button>
        <button className="constructor-button" onClick={likeHandler}>ЛАЙК!</button>

      </form>

    </div>

  );
}
