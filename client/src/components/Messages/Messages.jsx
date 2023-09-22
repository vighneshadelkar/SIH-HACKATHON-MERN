import React, { useState, useEffect, createContext } from "react";
import { AuthUserContext } from "../../context/AuthContext";
import "./Messages.css";

export default function Messages({ messages }) {
    const {AuthUser}=createContext(AuthUserContext)
  const [incomingMessages, setIncomingMessages] = useState([messages]);

  return (
    <>
      {incomingMessages.map((m) => {
        return (
          <div className={m.sender === "64831071112ee317ba2849e6" ? "messages-own" : "messages"} key={m._id}>
            <div className="messageContainer">
              <div className="messagesWrapper">
                <p className="message">{m.text}</p>
              </div>
              <span className="username">User ID: {m.sender}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
