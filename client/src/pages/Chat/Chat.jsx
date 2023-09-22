import React, { useEffect, useContext, useState } from "react";
import { AuthUserContext } from "../../context/AuthContext";
import "./Chat.css";
import Conversations from "../../components/Conversations/Conversations";
import Messages from "../../components/Messages/Messages";

export default function Chat() {
  const { AuthUser } = useContext(AuthUserContext);
  const [messages, setmessages] = useState("");
  const [currentChat, setcurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);

  console.log(messages);
  useEffect(() => {
    async function getMessages() {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:5000/message/" + currentChat?._id,
        requestOptions
      );

      const result = await res.json();

      if (res) {
        setmessages(result);
      }
    }
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    console.log(AuthUser._id);
    async function getConversations() {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:5000/conversation/" + AuthUser.id,
        requestOptions
      );
      const result = await res.json();

      if (res) {
        setConversations(result);
      }
    }
    getConversations();
  }, [AuthUser]);
  return (
    <div className="chatContainer">
      <div className="chatWrapper">
        <div>
          <input
            type="Search"
            placeholder="Search for friends"
            className="conversatiosInput"
          ></input>
        </div>
        {conversations?.map((c) => {
          return (
            <div
              className="okay"
              key={c._id}
              onClick={(c) => setcurrentChat(c)}
            >
              {console.log(c)}
              <Conversations conversations={c} currentUser={AuthUser} />
            </div>
          );
        })}
        {/* <div className="chatbox">
          {currentChat ? (
            <>
              <div className="messangerTop">
                {messages.map((m) => {
                  return <Messages key={m._id} messages={messages} />;
                })}
              </div>
              <div className="messangerBottom">
                <form >
                  <input type="text"></input>
                  <button>Send</button>
                </form>
              </div>
            </>
          ) : (
            <p>Join conversation </p>
          )}
        </div> */}
      </div>
    </div>
  );
}
