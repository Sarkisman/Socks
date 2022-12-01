import React, { useState, useEffect } from 'react';
import Sock from './Sock';

export default function Basket() {
  const [userSocs, setUserSocs] = useState([]);
  useEffect(() => {
    fetch('/basket/bas')
      .then((data) => data.json())
      .then((data) => setUserSocs(data));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      {userSocs?.map((el) => <li key={el.id}><Sock inputs={el} /></li>)}
    </div>
  );
}
