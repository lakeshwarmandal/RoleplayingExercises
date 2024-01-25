import React, { useState } from "react";
import "./App.css";

const RolePlayingExercise = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (role, text) => {
    setMessages([...messages, { role, text }]);
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="Chat">
        <div className="Messages">
          {messages.map((message, index) => (
            <div key={index} className={message.role}>
              <strong>{message.role}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="Input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={() => sendMessage("User", inputValue)}>Send</button>
          <button onClick={() => sendMessage("Bot", "Hello! How can I help?")}>
            Simulate Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolePlayingExercise;
