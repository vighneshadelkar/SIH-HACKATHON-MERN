import React, { useState, useEffect, createContext } from "react";
import { AuthUserContext } from "../../context/AuthContext";
import Person1 from "../../images/person1.jpg";
import "./Messages.css";

export default function Messages({ messages}) {
  const { AuthUser } = createContext(AuthUserContext);
  const [incomingMessages, setIncomingMessages] = useState([messages]);

  return (
    <>
      {incomingMessages.map((m) => {
        return (
          <div
            className={
              m.sender === "64831071112ee317ba2849e6"
                ? "messages-own"
                : "messages"
            }
            key={m._id}
          >
            <div className="messageContainer">
              <div className="messagesWrapper">
                <div className={m.sender === "64831071112ee317ba2849e6"
                        ? "chat-own"
                        : "chat"}>
                  <p
                    className={
                      m.sender === "64831071112ee317ba2849e6"
                        ? "message-own"
                        : "message"
                    }
                  >
                    {m.text}
                  </p>
                  <div className="profImgDiv">
                    <img src={Person1} alt="" className="profImg" />
                  </div>
                </div>
              </div>
              <div className="usernameWrapper">
                <small
                  className={
                    m.sender === "64831071112ee317ba2849e6"
                      ? "username-own"
                      : "username"
                  }
                >
                  User ID: {m.sender}
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
