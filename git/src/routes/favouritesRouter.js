import express from 'express';
import { Sock } from '../../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  const initState = { };
  res.render('Layout', initState);
})
  .patch('/:id', async (req, res) => {
    await Sock.update({ favorSt: false }, { where: { id: req.params.id } });
    res.sendStatus(200);
  });

route.get('/fav', async (req, res) => {
  const userSocs = await Sock.findAll({ where: { userId: req.session.user.id, favorSt: true } });
  res.json(userSocs);
});

export default route;
