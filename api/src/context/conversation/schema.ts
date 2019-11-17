import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import { IMessage, IRoom } from '../../types'; 

const messageSchema = new mongoose.Schema({
  user: String,
  body: String,
}, { timestamps: true });

const roomSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true },
  topic: String,
  users: [String],
  messages: [messageSchema],
}, { timestamps: true });


export const Room: mongoose.Model<IRoom> = mongoose.model<IRoom>(
  'Room',
  roomSchema
);

export const Message: mongoose.Model<IMessage> = mongoose.model<IMessage>(
  'Message',
  messageSchema
);
