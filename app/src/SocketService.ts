import io from 'socket.io-client';
import { ChatMessage } from './types';
import { fromEvent, Observable } from 'rxjs';

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init(): SocketService {
    this.socket = io('localhost:8080');
    return this;
  }

  public send(message: ChatMessage): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<ChatMessage> {
    console.log(this.socket)
    return fromEvent(this.socket, 'message');
  }

  public disconnect (): void {
    this.socket.disconnect();
  }
}