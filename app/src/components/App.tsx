import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChatContext } from '../ChatContext';
import { ChatMessage } from '../types';

const Title = styled.h1`
  color: palevioletred;
`

const Row = styled.div`
  display: flex;
`

const App = () => {
  const chatContext = useContext(ChatContext)
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    chatContext.init();
    // retrieve observable
    const observable = chatContext.onMessage();
    // subscribe to observable
    observable.subscribe((message: ChatMessage) => {
      console.log(messages, message)
      setMessages(oldMessages => [...oldMessages, message])
    });

    return () => chatContext.disconnect();
  }, [])

  const onUpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const onSendMessage = (): void => {
    // author name is hardcoded for simplicity
    const author: string = 'Ross';
   
    chatContext.send({
      message: input,
      author: author
    });

    setInput('');
  };

  console.log(messages)

  return (
    <div>
      <Title>Hello World!</Title>
      <Row>
        <input
          placeholder="Type your message here..."
          onChange={onUpdateInput}
          value={input}
        />
        <button disabled={input.length === 0} onClick={onSendMessage}>
          Send Message
        </button>
      </Row>

      <div className="App-chatbox">
        {messages.map((msg: ChatMessage, i: number) => (
          <div key={i}>
            <p>{msg.author}</p>
            <p>
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
