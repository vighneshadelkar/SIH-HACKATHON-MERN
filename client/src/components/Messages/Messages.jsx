import React, { useState } from "react";
import "./Messages.css";

export default function Messages({ messages }) {
  const [incomingMessages, setincomingMessages] = useState(messages);
  console.log(messages);
  return (
    <>
      {incomingMessages.map((m) => {
        return (
          <div className={true ? "messages-own" : "messages"} key={m._id}>
            <div className="messageContainer">
              <div className="messagesWrapper">
                <p className="message">{m.text}</p>
              </div>
              <span className="username">Vighnesh</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
