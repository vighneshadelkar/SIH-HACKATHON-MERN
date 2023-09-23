import React, { useEffect, useContext, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import Conversations from "../../components/Conversations/Conversations";
import { AuthUserContext } from "../../context/AuthContext";
import Messages from "../../components/Messages/Messages";
import "./Chat.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import SearchUsers from "../../components/Search/Users";
import Person1 from "../../images/person1.jpg";

export default function Chat() {
  const { AuthUser } = useContext(AuthUserContext);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [count, setcount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setusers] = useState([]);
  const [inputText, setInputText] = useState("");
  const containerRef = useRef();
  const socket = useRef(null);

  // scroll in message boxes
  const scrollDiv = (event) => {
    const delta = Math.sign(event.deltaY);
    containerRef.current.scrollTop += delta * 40;
    event.preventDefault();
  };

  // start a conversation
  const createConvo = async (receiverId) => {
    console.log(receiverId);
    const existingConvo = conversations.find(
      (convo) =>
        (convo.senderId === AuthUser._id && convo.receiverId === receiverId) ||
        (convo.senderId === receiverId && convo.receiverId === AuthUser._id)
    );

    if (existingConvo) {
      console.log("Conversation already exists");
      return;
    }
    try {
      const newConversation = {
        senderId: AuthUser._id,
        receiverId: receiverId,
      };

      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConversation),
        redirect: "follow",
      };

      let res = await fetch(
        "http://localhost:5000/conversation/",
        requestOptions
      );

      if (res.ok) {
        console.log("success");
        setcount((prev) => prev + 1);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // search users feature
  async function getUsers() {
    try {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch("http://localhost:5000/users", requestOptions);

      if (res.ok) {
        const result = await res.json();
        setusers(result);
      } else {
        console.error("Error fetching messages:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = users.filter(
    (item) =>
      item.firstname &&
      item.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCards = (items) => {
    return filteredData.map((item, index) => (
      <li key={index} onClick={() => createConvo(item._id)}>
        {item.firstname + " " + item.lastname}
      </li>
    ));
  };

  // initalised soxket
  useEffect(() => {
    socket.current = socketIOClient("http://localhost:9000");

    socket.current.on("receiveMessage", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [messages]);

  // get all the messages on clicking on conversations
  useEffect(() => {
    if (currentChat) {
      async function getExistingMessages() {
        try {
          console.log(currentChat._id);
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
            console.log(result);
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

  // get conversations between users
  useEffect(() => {
    async function getConversations() {
      try {
        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const res = await fetch(
          `http://localhost:5000/conversation/${AuthUser._id}`,
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
  }, [AuthUser, count]);

  // send message on chat
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

  return (
    <div className="chatContainer">
      <Navbar2 />
      <div className="chatWrapper">
        <div className="chatSidebar">
          <SearchUsers handleSearch={handleSearch} />
          {searchTerm && <ul>{renderCards(filteredData)}</ul>}
          {conversations?.map((c) => {
            return (
              <div
                className="okay"
                key={c._id}
                onClick={() => setCurrentChat(c)}
              >
                <Conversations conversations={c} currentUser={AuthUser}/>
              </div>
            );
          })}
        </div>

        <div className="chatbox">
          {/* {
            currentChat && (
              <>
            <div className="userNameDiv">
              <div className="profImgDiv">
                <img src={Person1} alt="" className="profImg" />
              </div>
              <h2>{conversations.firstname + " " + currentChat.lastname}</h2>
            </div>
          </>
            )
          } */}
          
          {currentChat ? (
            <>
              <div className="chatTop" ref={containerRef} onWheel={scrollDiv}>
                {messages.map((m) => {
                  return <Messages key={m._id} messages={m} user={AuthUser}/>;
                })}
              </div>
              <div className="chatBottom">
                <form onSubmit={sendMessage} className="chatForm">
                  <input
                    type="chatText"
                    value={inputText}
                    className="chatInput"
                    placeholder="Messages..."
                    onChange={(e) => setInputText(e.target.value)}
                  ></input>
                  <button className="chat-btn">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
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
