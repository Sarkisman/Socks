import React from 'react';

export default function Sock({ inputs }) {
  //   const background = images.patMath;
  //   console.log(images);
  return (
    <div>
      <div
        name="color"
        style={{
        // backgroundImage: `url(${background})`,
          backgroundColor: inputs.color,
          //   backgroundColor: colors.yellow,
          backgroundPosition: 'center/center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          //   border: 'solid black 1px',
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
