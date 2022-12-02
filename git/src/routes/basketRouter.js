import express from 'express';
import { Sock } from '../../db/models';

const basket = express.Router();

basket.get('/', (req, res) => {
  await Sock.destroy({ where: { userId: req.session.user.id, favorSt: false, bascetSt: false } });
  const initState = { };
  res.render('Layout', initState);
});

basket.get('/bas', async (req, res) => {
  const userSocs = await Sock.findAll({ where: { userId: req.session.user.id, bascetSt: true } });
  res.json(userSocs);
});

basket.patch('/:id', async (req, res) => {
  const someLike = await Sock.findOne({ where: { id: req.params.id } });
  someLike.favorSt = !someLike.favorSt;
  await someLike.save();
  res.json(someLike);
});

basket.post('/order/:id', async (req, res) => {
  await Sock.update({ bascetSt: false }, { where: { userId: req.params.id } });
  res.sendStatus(200);
});

basket.delete('/:id', async (req, res) => {
  const someLike = await Sock.findOne({ where: { id: req.params.id } });
  someLike.bascetSt = !someLike.bascetSt;
  await someLike.save();
  res.json(someLike);
});

export default basket;
