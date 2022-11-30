import React from 'react';

export default function NavBar({ user }) {
  return (

    <nav className="navbar navbar-expand-lg bg-danger" style={{ borderRadius: 12, marginTop: '7px' }}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <img src="/image/лого.png" alt="" width="30" height="35" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0-5 mb-lg-10">
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/login">Авторизация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/reg">Регистрация</a>
                </li>
              </>
            )
              : (
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/logout">Выход</a>
                </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
