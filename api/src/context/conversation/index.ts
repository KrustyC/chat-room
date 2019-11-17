import ConversationService from './service';
import { IRoom } from '../../types';
import ChatServer from '../../ChatServer';

const conversationService = new ConversationService();

export default {
  getRooms: (): Promise<IRoom[]> => conversationService.getRooms(),
  createRoom: (name: string): Promise<IRoom> => conversationService.createRoom(name),
  sendMessage: (chatServer: ChatServer, roomId: string, msg: string) => conversationService.sendMessage(chatServer, roomId, msg),
}