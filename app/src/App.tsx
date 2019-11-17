import React, { useContext, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ChatContext } from './ChatContext';
import Main from './components/Main'
import ChatRooms from './components/ChatRooms'
import Actions from './components/Actions'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'main main main sidebar'
    'main main main sidebar'
    'main main main sidebar'
    'main main main sidebar'
    'main main main sidebar'
    'footer footer footer footer'
  ;
`

const App = () =>  {
  const chatContext = useContext(ChatContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    chatContext.init();
    setMounted(true);
    return () => chatContext.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      {mounted && (
        <Layout>
          <Main />
          <ChatRooms />
          <Actions />
        </Layout>
      )}
    </>
  );
}

export default App;
