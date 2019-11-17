import React from 'react'
import styled from 'styled-components'
import { IChatRoom } from '../types'
import Button from '../uikit/Button'

const Container = styled.div`
  /* height: calc(100vh - 100px); */
  display:flex;
  flex-direction: column;
  background: #FFF;
  border-left: 2px solid #05A8A1;
  padding: 2em 3em;
  grid-area: sidebar;
`

const ChatRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
`

const ChatRooms = () => {
  const chatrooms = [
    { id: 'e80wehfew', name: 'THe horny chatroom' },
    { id: 'e80wehfedwdw', name: 'Shisha chatroom' },
    { id: 'weq8e7fgewof', name: 'Uaglio guys' },
    { id: 'ifuhwoiwj', name: 'Terchios' },
  ];

  const onJoinChatRoom = (id: string) => {
    console.log('join', id)
  }

  return (
    <Container>
      <h2>Available Chat Rooms</h2>
      {chatrooms.map((chatRoom: IChatRoom) => (
        <ChatRoom key={chatRoom.id}>
          <span>
            {chatRoom.name}
          </span>

          <Button size="small" onClick={() => onJoinChatRoom(chatRoom.id)}>
            Join
          </Button>
        </ChatRoom>
      ))}
    </Container>
  )
}

export default ChatRooms