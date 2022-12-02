import express from 'express';
import { Sock } from '../../db/models';

const sockgen = express.Router();

sockgen.get('/', async (req, res) => {
  try {
    const initState = { };
    res.render('Layout', initState);
    Sock.destroy({ where: { userId: req.session.user.id, favorSt: false, bascetSt: false } });
  } catch (error) {
    //
  }
});

sockgen.post('/postsock', async (req, res) => {
  req.body.userId = req.session?.user?.id;
  req.body.bascetSt = true;
  const {
    color, pattern, img, userId, favorSt, bascetSt,
  } = req.body;
  const [_, iscreated] = await Sock.findOrCreate({
    where: {
      color, pattern, img, userId,
    },
    defaults: {
      color, pattern, img, userId, favorSt, bascetSt,
    },
  });
  if (!iscreated) {
    await Sock.update({ bascetSt: true }, {
      where: {
        color, pattern, img, userId,
      },
    });
  }
  res.sendStatus(200);
});

sockgen.post('/likesock', async (req, res) => {
  req.body.userId = req.session?.user?.id;
  req.body.favorSt = true;
  const {
    color, pattern, img, userId, favorSt, bascetSt,
  } = req.body;
  const [_, iscreated] = await Sock.findOrCreate({
    where: {
      color, pattern, img, userId,
    },
    defaults: {
      color, pattern, img, userId, favorSt, bascetSt,
    },

  });
  if (!iscreated) {
    await Sock.update({ favorSt: true }, {
      where: {
        color, pattern, img, userId,
      },
    });
  }
  res.sendStatus(200);
});

export default sockgen;
