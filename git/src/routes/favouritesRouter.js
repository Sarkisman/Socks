import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
})
  .patch('/:id', async (req, res) => {
    await Sock.update({ status: false }, { where: { id: req.params.id } });
    console.log(req.params.id);
    res.sendStatus(200);
  });

export default route;
