import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <div
        className="text-center text-dark container bg-secondary"
        style={{
          borderRadius: 12,
          marginTop: '7px',
          position: 'absolute',
          top: '30%',
          height: '150px',
        }}
      >
        <h2>*Самое время быть уникальным! Смоделируй свою любимую пару носков!*</h2>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{
            top: '70%',
            height: '70px',
          }}
        >
          Генератор носков тут!!
        </button>
      </div>

      <footer
        className="text-center text-dark container bg-secondary"
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          borderRadius: 12,
          marginTop: '7px',
        }}
      >
        <section className="">
          <div className="container text-center text-md-start text-dark mt-3">
            <div className="row mt-2">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">
                <h3 className="text-uppercase fw-bold mt-4 mb-4">
                  <i className="fas fa-gem me-3" />
                  “Enjoy socks”
                </h3>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 mb-2">
                <h6 className="text-uppercase fw-bold mb-2">
                  Контакты
                </h6>
                <div>
                  <a href="mailto:info@enjoysocks.ru" className="link-dark">почта: info@enjoysocks.ru</a>
                </div>
                <div>
                  <i href="#!" className="link-dark">Адрес: г. Москва, Шоссе Энтузиастов 12 ст2</i>
                </div>
                <div>
                  <i href="#!" className="link-dark">Номер телефона: +7 999 666 36 36</i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
