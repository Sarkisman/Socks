import React from 'react';

export default function NavBar({ user }) {
  return (

    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#2d2d2d',
        fontFamily: 'Roboto',
        fontWeight: 'regular',
        position: 'fixed',
        width: '100%',
        maxHeight: '60px',
        zIndex: '1000',
      }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <img src="/image/лого.png" alt="" width="50" height="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0-5 mb-lg-10">
            {!user ? (
              <>
                <li className="nav-item">
                  <h4><a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/auth/login">АВТОРИЗАЦИЯ</a></h4>
                </li>
                <li className="nav-item">
                  <h4><a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/auth/reg">РЕГИСТРАЦИЯ</a></h4>
                </li>
                <li className="nav-item">
                  <h4><a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/sockgen">ГЕНЕРАТОР НОСКОВ</a></h4>
                </li>
              </>
            )
              : (
                <>
                  <li className="nav-item">
                    <h4>
                      {' '}
                      <a className="nav-link active" aria-current="page" style={{ color: 'white' }} href="/favourites">ИЗБРАННОЕ</a>
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4>
                      {' '}
                      <a className="nav-link active" aria-current="page" style={{ color: 'white' }} href="/basket">КОРЗИНА</a>
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4>
                      {' '}
                      <a className="nav-link active" aria-current="page" style={{ color: 'white' }} href="/sockgen">ГЕНЕРАТОР НОСКОВ</a>
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4>
                      {' '}
                      <a className="nav-link active" aria-current="page" href="/auth/logout">Выход</a>
                    </h4>
                  </li>

                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
