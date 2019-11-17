import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChatContext } from '../ChatContext';
import { ChatMessage } from '../types';

const Container = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  padding: 2em 3em;
`

const Title = styled.h1`
  color: palevioletred;
`

const Row = styled.div`
  display: flex;
`

const Main = () => {
  const chatContext = useContext(ChatContext)
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    chatContext.onMessage().subscribe((message: ChatMessage) => {
      setMessages(oldMessages => [...oldMessages, message])
    });
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
    <Container>
      <Title>Current Chat</Title>
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

      <div>
        {messages.map((msg: ChatMessage, i: number) => (
          <div key={i}>
            <p>{msg.author}</p>
            <p>
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Main;
