import express from 'express';
import { Sock } from '../../db/models';

const basket = express.Router();

basket.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

basket.get('/bas', async (req, res) => {
  const userSocs = await Sock.findAll({ where: { userId: req.session.user.id, bascetSt: true } });
  res.json(userSocs);
});

export default basket;
