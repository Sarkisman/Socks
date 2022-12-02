import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center"
        style={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#2d2d2d',
          fontFamily: 'Roboto',
          fontWeight: 'regular',
          position: 'fixed',
          width: '100%',
          height: '90px',
          zIndex: '1000',
        }}
      >
        <section>
          <div className="container text-center text-md-start">
            <div className="row">
              <div style={{ marginTop: '25px', verticalAlign: 'middle' }} className="col-md-3 mx-auto mb-1">
                <h3 className="mb-4">
                  <i style={{ color: 'white' }} className="footerText me-3" />
                  ENJOY SOCKS
                </h3>
              </div>
              <div style={{ marginTop: '10px' }} className="col-md-6 col-lg-6 col-xl-6 mb-2">
                <div>
                  <a style={{ color: 'white' }} className="footerText" href="mailto:info@enjoysocks.ru">info@enjoysocks.ru</a>
                </div>
                <div>
                  <i style={{ color: 'white' }} className="footerText" href="#!">г. Москва, Шоссе Энтузиастов 12 ст2</i>
                </div>
                <div>
                  <i style={{ color: 'white' }} className="footerText" href="tel:89996663636">+7 999 666 36 36</i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
