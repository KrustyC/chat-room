import { Request, Response } from 'express';
import ChatServer from '../ChatServer';
import Conversation from '../context/conversation';

export async function getRooms(req: Request, res: Response, next: Function) {
  try {
    const rooms = await Conversation.getRooms();
    res.status(200).send({ rooms });
  } catch (err) {
    next(err);
  }
}

export async function createRoom(req: Request, res: Response, next: Function) {
  try {
    const { body: data } = req;
    const room = await Conversation.createRoom(data.name);
    res.status(200).send({ room });
  } catch (err) {
    next(err);
  }
}

export const sendMessage = (chatServer: ChatServer) => async (req: Request, res: Response, next: Function) => {
  try {
    const { body: data, params: { id: roomId} } = req;
    // const user = 'Mario';
    const room = await Conversation.sendMessage(chatServer, roomId, data.msg);
    res.status(200).send({ room });
  } catch (err) {
    next(err);
  }
}