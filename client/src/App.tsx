import React from 'react';
import { io } from 'socket.io-client';

import MessageDisplay from './components/MessageDisplay';
import MessageInput from './components/MessageInput';

const socket = io();

function App() {
  return (
    <section>
      <MessageDisplay socket={socket} />
      <MessageInput socket={socket} />
    </section>
  );
}

export default App;
