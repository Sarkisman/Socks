import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div style={{
      backgroundImage: 'url(/newImage/backMain.png)',
      backgroundPosition: 'center/center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      //   border: 'solid black 1px',
      height: '100%',
    }}
    >
      <div style={{ height: '100%' }}>
        <h4 style={{
          fontFamily: 'Roboto',
          fontWeight: '300',
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
        >
          *Самое время быть уникальным! Смоделируй свою любимую пару носков!*
        </h4>
        <a
          href="/sockgen"
          style={{
            position: 'absolute',
            top: '55%',
            left: '47%',
            transform: 'translate(-50%, -50%)',
            textDecoration: 'none',
          }}
        >
          <button className="constructor-button" type="submit">ДАВАЙ НОСКИ!</button>
        </a>

      </div>

    </div>
  );
}
