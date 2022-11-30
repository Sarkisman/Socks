import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage({ tracks }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '30%',
          left: '20%',
          height: '100px',
          margin: '-50px 0 0 -100px',
        }}
      >
        <h4>*Самое время быть уникальным! Смоделируй свою любимую пару носков!*</h4>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{
            position: 'fixed',
            top: '40%',
            left: '45%',
            height: '100px',
            margin: '-50px 0 0 -100px',
          }}
        >
          Генератор носков тут!!
        </button>
      </div>

      <footer
        className="text-center text-lg-start container bg-light text-muted"
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}
      >
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  “Enjoy socks”
                </h6>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Контакты
                </h6>
                <div>
                  <a href="mailto:info@enjoysocks.ru" className="link-secondary">почта: info@enjoysocks.ru</a>
                </div>
                <div>
                  <a href="#!" className="link-secondary">Адрес: г. Москва, Шоссе Энтузиастов 12 ст2</a>
                </div>
                <div>
                  <a href="#!" className="link-secondary">Номер телефона: +7 999 666 36 36</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
