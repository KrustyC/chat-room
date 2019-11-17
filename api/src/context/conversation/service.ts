import { Room, Message } from './schema'
import { IRoom, IMessage } from '../../types'
import ChatServer from '../../ChatServer';

export default class Conversation {
  async getRooms(): Promise<IRoom[]> {
    try {
      console.log('rooms')
      const rooms = await Room.find({}, (err, res) => {
        console.log(err)
      });
      console.log('rooms 2')

      return rooms;

      console.log('rooms', rooms)
    } catch (e) {
      console.log('ba d', e)
    }

  }

  async createRoom(name: string) {
    const room = await new Room({ name, user: 'Davide' });

    try {
      await room.save();
    } catch (e) {
      console.log('Error saving room:', e)
    }

    return room;
  }

  async sendMessage(chatServer: ChatServer, roomId: string, msg: string) {
    const message = await new Message({ body: msg, user: 'Davide' });
    
    await message.save();
    const room = await Room.update({ _id: roomId }, { $push: { messages: message } });

    chatServer.notifyRoom(room, message)
  }
}