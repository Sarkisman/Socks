import React from 'react';

export default function Sock({ inputs }) {
  return (
    <div>
      <div
        name="color"
        style={{
          backgroundColor: inputs.color,
          backgroundPosition: 'center/center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '324px',
          height: '400px',
        }}
      >
        <img
          name="pattern"
          className="img"
          src={inputs.pattern}
          style={{
            width: '324px',
            height: '400px',
            position: 'absolute',
          }}
          alt=""
        />
        <img
          name="img"
          className="img"
          src={inputs.img}
          style={{
            width: '324px',
            height: '400px',
            position: 'absolute',
          }}
          alt=""
        />
        <img
          className="mask"
          src="/newImage/mask.png"
          style={{
            width: '324px',
            height: '400px',
            position: 'absolute',
            border: 'solid black 1px',
          }}
          alt=""
        />
      </div>
    </div>
  );
}
