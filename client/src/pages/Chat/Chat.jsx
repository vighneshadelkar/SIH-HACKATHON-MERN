import React, { useEffect, useContext, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import Conversations from "../../components/Conversations/Conversations";
import { AuthUserContext } from "../../context/AuthContext";
import Messages from "../../components/Messages/Messages";
import "./Chat.css"

export default function Chat() {
  const { AuthUser } = useContext(AuthUserContext);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [inputText, setInputText] = useState("");

  const containerRef = useRef();
  const socket = useRef(null);

  const scrollDiv = (event) => {
    const delta = Math.sign(event.deltaY);
    containerRef.current.scrollTop += delta * 40;
    event.preventDefault();
  };

  useEffect(() => {
    socket.current = socketIOClient("http://localhost:9000");

    socket.current.on("receiveMessage", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [messages]);

  useEffect(() => {
    if (currentChat) {
      async function getExistingMessages() {
        try {
          let requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          const res = await fetch(
            `http://localhost:9000/messages/${currentChat._id}`, // Adjust the endpoint URL
            requestOptions
          );

          if (res.ok) {
            const result = await res.json();
            setMessages(result);
          } else {
            console.error("Error fetching messages:", res.status);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }

      getExistingMessages();
    }
  }, [currentChat]);

  useEffect(() => {
    async function getConversations() {
      try {
        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const res = await fetch(
          "http://localhost:5000/conversation/6482ee531d78242364c4bf22",
          requestOptions
        );

        if (res.ok) {
          const result = await res.json();
          setConversations(result);
        } else {
          console.error("Error fetching conversations:", res.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getConversations();
  }, [AuthUser]);

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      conversationId: currentChat._id,
      sender: AuthUser._id,
      text: inputText,
    };
    socket.current.emit("sendMessage", newMessage);

    setInputText("");
  };

  console.log(currentChat);

  return (
    <div className="chatContainer">
      <div className="chatWrapper">
        <div>
          <input
            type="Search"
            placeholder="Search for friends"
            className="conversatiosInput"
          ></input>
          {conversations?.map((c) => {
            return (
              <div
                className="okay"
                key={c._id}
                onClick={() => setCurrentChat(c)}
              >
                <Conversations conversations={c} currentUser={AuthUser} />
              </div>
            );
          })}
        </div>

        <div className="chatbox">
          {currentChat ? (
            <>
              <div className="chatTop" ref={containerRef} onWheel={scrollDiv}>
                {messages.map((m) => {
                  return <Messages key={m._id} messages={m} />;
                })}
              </div>
              <div className="chatBottom">
                <form onSubmit={sendMessage}>
                  <input
                    type="chatText"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  ></input>
                  <button>Send</button>
                </form>
              </div>
            </>
          ) : (
            <p>Join conversation </p>
          )}
        </div>
      </div>
    </div>
  );
}
