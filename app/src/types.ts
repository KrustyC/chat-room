export interface ChatMessage {
  author: string;
  message: string;
}

export interface ChatState {
  input: string;
  messages: ChatMessage[];
}

export interface IChatRoom {
  id: string;
  name: string;
}
