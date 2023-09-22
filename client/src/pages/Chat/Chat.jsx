import React, { useEffect, useContext, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import Conversations from "../../components/Conversations/Conversations";
import { AuthUserContext } from "../../context/AuthContext";
import Messages from "../../components/Messages/Messages";
import "./Chat.css";
import Navbar2 from "../../components/Navbar/Navbar2";

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
            `http://localhost:9000/messages/${currentChat._id}`,
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
      <Navbar2 />
      <div className="chatWrapper">
        <div className="chatSidebar">
          <h1 className="homeTitle">Meassges</h1>
          <input
            type="Search"
            placeholder="Search for friends"
            className="conversationsInput"
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
                <form onSubmit={sendMessage} className="chatForm">
                  <input
                    type="chatText"
                    value={inputText}
                    className="chatInput"
                    placeholder="Messages...."
                    onChange={(e) => setInputText(e.target.value)}
                  ></input>
                  <button className="chat-btn">
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <p className="joinConvo">Join conversation </p>
          )}
        </div>
      </div>
    </div>
  );
}
