import express from 'express';

const basket = express.Router();

basket.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default basket;
