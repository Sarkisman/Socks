import React, { useEffect, useState } from 'react';
import Sock from './Sock';

export default function Favourites() {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/favourites/fav')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div>
        {userSocs?.map((el) => (
          <div key={el.id}>
            <Sock inputs={el} />
          </div>
        ))}
      </div>
    </div>
  );
}
