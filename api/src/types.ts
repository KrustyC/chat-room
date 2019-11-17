import * as mongoose from 'mongoose';

export interface ChatMessage { 
  author: string;
  message: string;
}

export interface IMessage extends mongoose.Document {
  _id: string;
  user: string;
  body: string;
  createdAt: Date;
} 

export interface IRoom extends mongoose.Document {
  _id: string;
  name: string;
  topic: string;
  users: string[];
  messages: IMessage[];
} 
