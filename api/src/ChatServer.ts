
import * as express from 'express';
import * as socketIo from 'socket.io';
import { createServer, Server } from 'http';
import { ChatEvent } from './constants';
import { ChatMessage, IRoom, IMessage } from './types';

export default class ChatServer {
  public static readonly PORT: number = 3090;
  private server: Server;
  private io: SocketIO.Server;

  constructor (app: express.Application) {
    this.server = createServer(app);
    this.initSocket();
    this.listen();
  }

  private initSocket (): void {
    this.io = socketIo(this.server);
  }

  private listen (): void {
    // this.server.listen(this.port, () => {
    //   console.log('Running server on port %s', this.port);
    // });

    this.io.on(ChatEvent.CONNECT, (socket: any) => {
      console.log('user connected');

      // socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
      //   console.log('[server](message): %s', JSON.stringify(m));
      //   this.io.emit('message', m);
      // });

      // socket.on(ChatEvent.DISCONNECT, () => {
      //   console.log('Client disconnected');
      // });
    });
  }

  public notifyRoom(room: IRoom, message: IMessage) {
    this.io.to(room.name).emit('message', { msg: message.body, user: message.user });
  }
}