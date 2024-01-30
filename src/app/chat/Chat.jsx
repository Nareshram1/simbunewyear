'use client'
import React, { useEffect, useRef } from 'react';

const ChatComponent = ({ messages, clientid }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className='h-96 overflow-y-auto border-x-2 border-y-2 ml-4 mr-4 mt-4' ref={chatContainerRef}>
      {messages.map((message) => (
        <div key={message.id} className={`chat ${message.id === clientid ? 'chat-end' : 'chat-start'}`}>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
