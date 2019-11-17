import React from 'react'
import styled from 'styled-components'
import Button from '../uikit/Button';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  border-top: 2px solid #05A8A1;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 3em;
  grid-area: footer;
`

const Actions = () => {
  const onCreateChatRoom = () => {
    console.log('new')
  }

  return (
    <Container>
      <Button type="button" onClick={onCreateChatRoom}>
        Create ChatRoom
      </Button>
    </Container>
  )
}

export default Actions
