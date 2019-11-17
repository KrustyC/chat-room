// import passport from 'passport';
import { Router } from 'express';
import ChatServer from '../ChatServer'
// import path from 'path';

// import '../library/passport';

import * as AppController from '../controllers/AppController';

// Get Middlewares
// import getUser from '../middlewares/getUser';

// const auth = passport.authenticate('jwt', { session: false });
// const fbAuth = passport.authenticate('facebook-token', { session: false });

export default (chatServer: ChatServer) => {
  // eslint-disable-next-line
  const api = Router();

  // api.get('/', (_, res) => {
  //   res.sendFile(path.join(__dirname, '/../public/index.html'));
  // });

  api.get('/rooms', AppController.getRooms);
  api.post('/rooms', AppController.createRoom);
  api.post('/rooms/:id/message', AppController.sendMessage(chatServer));

  return api;
}