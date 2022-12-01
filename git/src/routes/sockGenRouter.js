import express from 'express';
import { Sock } from '../../db/models';

const sockgen = express.Router();

sockgen.get('/', async (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

sockgen.post('/postsock', async (req, res) => {
  req.body.userId = req.session?.user?.id; // записываем из запроса req
  req.body.bascetSt = true; // записываем из запроса req
  const {
    color, pattern, img, userId, favorSt, bascetSt,
  } = req.body;
  // await Sock.create(req.body); // записываем из запроса req
  await Sock.findOrCreate({
    where: {
      color, pattern, img, userId,
    },
    defaults: {
      color, pattern, img, userId, favorSt, bascetSt,
    },
  }); // записываем из запроса req
  //   const currMemeWithUsername = await Sock.findOne({ where: { id: currMeme.id }, include: User });
  // req.body.username = req.session?.user?.username;
  console.log(req.body, 'то что пришло в req.body');
  res.sendStatus(200);
//   res.json(currMemeWithUsername); // отправляем только что созданный мем обратно на фронт
});

sockgen.post('/likesock', async (req, res) => {
  req.body.userId = req.session?.user?.id; // записываем из запроса req
  req.body.favorSt = true; // записываем из запроса req

  await Sock.create(req.body); // записываем из запроса req
  //   const currMemeWithUsername = await Sock.findOne({ where: { id: currMeme.id }, include: User });
  // req.body.username = req.session?.user?.username;
  console.log(req.body, 'то что пришло в req.body');
  res.sendStatus(200);
//   res.json(currMemeWithUsername); // отправляем только что созданный мем обратно на фронт
});

export default sockgen;
