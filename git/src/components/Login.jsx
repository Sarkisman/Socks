import React, { useState } from 'react';

export default function login() {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({});
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      window.location.href = '/'; // редирект на главную
      // setInput({ name: '' }); // если хотим очистить инпут
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  return (
    <div className="container" style={{ width: 400, margin: 'auto', color: 'white' }}>
      <form onSubmit={submitHandler}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="field">
          <label className="label">
            Введите почту пользователя
          </label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-medium" value={input.email} name="email" onChange={changeHandler} type="text" placeholder="ivanov@mail.ru" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">
            Введите пароль
          </label>
          <div className="control has-icons-left">
            <input className="input is-medium" value={input.password} name="password" onChange={changeHandler} type="password" placeholder="Пароль" />
            <span className="icon is-left">
              <i className="rbc-icon lock" />
            </span>
          </div>
        </div>
        <div className="buttons">
          <button style={{ marginTop: '1rem' }} type="submit" className="is-success is-focused is-fullwidth button" tabIndex="0">Регистрация</button>
        </div>
      </form>
    </div>
  );
}
