import * as bodyParser from 'body-parser';
import* as compression from 'compression';
import config from '../config';
import * as cors from 'cors';
// import * as jwt from 'express-jwt';
import * as express from 'express';
import connectToDb from './dbConnection';
import router from './routes';
import ChatServer from '../ChatServer'

const app = express();

// initialise middleware
app.use(cors());
app.use(compression());
// app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ type: '*/*', limit: '50mb' }));

// const authMiddleware = jwt({
//   credentialsRequired: false,
//   secret: config('jwtSecret'),
// });

// app.use(authMiddleware);

const chatServer = new ChatServer(app);

app.use('/', router(chatServer));

export function startAPI() {
  connectToDb(config);

  const instance = process.env.NODE_APP_INSTANCE || '0';
  const port = parseInt(config('API_PORT'), 10) + parseInt(instance, 10);

  // app.get('*', (_, res) => {
  //   res.sendFile(path.join(__dirname, '/../public/index.html'));
  // });

  app.listen({ port }, () =>
    // tslint:disable-next-line
    console.log(
      `🚀 Server ready at http://localhost:${port}`
    )
  );
}

export const api = app;