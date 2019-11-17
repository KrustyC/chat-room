import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { SocketService } from './SocketService';
import { ChatContext } from './ChatContext';

if (module.hot) {
  module.hot.accept();
}

const chat = new SocketService();

ReactDOM.render(
  <ChatContext.Provider value={chat}>
    <App />
  </ChatContext.Provider>,
  document.getElementById('root')
);
