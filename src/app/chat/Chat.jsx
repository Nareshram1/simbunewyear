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
    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc' }} ref={chatContainerRef}>
      {messages.map((message) => (
        <div key={message.id} className={`chat ${message.id === clientid ? 'chat-end' : 'chat-start'}`}>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
