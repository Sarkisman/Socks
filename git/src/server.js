/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import apiRouter from './routes/apiRouter';
import authCheck from './middlewares/isAuth';
import basketRouter from './routes/basketRouter';
import sockGenRouter from './routes/sockGenRouter';
import { User } from '../db/models';
import favouritesRouter from './routes/favouritesRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(async (req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  res.locals.socks = await User.findAll();
  next();
});

app.use('/', indexRouter);
app.use('/auth/', authRouter);
app.use('/api/', authCheck, apiRouter);
app.use('/basket/', basketRouter);
app.use('/favourites/', favouritesRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
