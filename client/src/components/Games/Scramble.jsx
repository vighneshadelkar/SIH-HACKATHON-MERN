import React, { useState, useEffect } from "react";
import "./Scramble.css";
import words from "../../Data/Scrambledata";

export default function Scramble() {
  const [wordText, setWordText] = useState("");
  const [hintText, setHintText] = useState("");
  const [timeText, setTimeText] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [questionsVisible, setQuestionsVisible] = useState(false);

  let correctWord;
  let timer;

  const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (maxTime > 0) {
        maxTime--;
        setTimeText(maxTime);
      } else {
        setModalContent(
          <div>
            <br />
            Time off! <b>{correctWord.toUpperCase()}</b> was the correct word
          </div>
        );
        setModalVisible(true);
        endGame();
      }
    }, 1000);
  };

  const start = () => {
    console.log("Button clicked!");
    setQuestionsVisible(true);
    console.log(questionsVisible);
    initGame();
  };

  // ... (previous code)

  const endGame = () => {
    clearInterval(timer);
    setWordText("");
    setHintText("");
    setInputValue("");
    setModalContent(
      <div>
        <br />
        Time off! <b>{correctWord.toUpperCase()}</b> was the correct word.
        <br />
        You Lost The Game ! :(
      </div>
    );
    setModalVisible(true);
  };

  const winGame = () => {
    clearInterval(timer);
    setWordText("");
    setHintText("");
    setInputValue("");
    setModalContent(
      <div>
        <br />
        <center>Congrats You WIN THE GAME !!!!!!</center>
      </div>
    );
    setModalVisible(true);
  };

  const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    setWordText(wordArray.join(""));
    setHintText(randomObj.hint);
    correctWord = randomObj.word.toLowerCase();
    setInputValue("");
    setScore(0);

    if (score > 9) {
      winGame();
    }
  };

  // ... (rest of the code)

  const checkWord = () => {
    let userWord = inputValue.toLowerCase();

    if (!userWord) {
      setModalContent(
        <div>
          <br />
          Please enter the word to check!
        </div>
      );
      setModalVisible(true);
      return;
    }

    if (userWord !== correctWord) {
      if (score >= 1) {
        setScore(score - 1);
      }
      setModalContent(
        <div>
          <br />
          Oops! <b>{userWord}</b> is not a correct word
        </div>
      );
      setModalVisible(true);
    } else {
      setScore(score + 1);
      setModalContent(
        <div>
          <br />
          Congrats! <b>{correctWord.toUpperCase()}</b> is the correct word
        </div>
      );
      setModalVisible(true);
    }

    initGame();
  };

  const refreshBtnClick = () => {
    initGame();
    initTimer(30);
  };

  const checkBtnClick = () => {
    checkWord();
  };

  useEffect(() => {
    initGame(); // Start a new game when the component mounts
  }, []);

  return (
    <div className="scrambleConatiner">
      <div className="scrambleWrapper">
        <h2>Word Scramble Game</h2>

        {questionsVisible ? (
          // <div className="content">
          <>
            <p className="word">{wordText}</p>
            <div className="details">
              <p className="hint">Hint: {hintText}</p>
              <p className="time">Time Left: {timeText}</p>
            </div>
            {/* <div className="hint">
          <span>{hintText}</span>
        </div>
        <div className="time">
          <b>{timeText}</b>
        </div> */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="buttons">
              <button className="refresh-word" onClick={refreshBtnClick}>
                Refresh
              </button>
              <button className="check-word" onClick={checkBtnClick}>
                Check
              </button>
            </div>
          </>
        ) : (
          <center>
            <div className="startArea" onClick={start}>
              <button className="startBtn">Start the Game</button>
            </div>
          </center>
        )}

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">{modalContent}</div>
          </div>
        )}
      </div>
    </div>
  );
}
