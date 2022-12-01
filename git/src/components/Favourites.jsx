import React from 'react';

export default function Favourites({ socks }) {
  return (
    <div className="d-flex justify-content-center">
      <div>
        {socks.map((el) => (
          <div>
            {el.color}
          </div>
        ))}
      </div>
    </div>
  );
}
