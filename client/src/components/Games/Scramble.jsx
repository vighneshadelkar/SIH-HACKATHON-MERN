import React, { useState, useEffect } from "react";
import "./Scramble.css";
import words from "../../Data/Scrambledata";

export default function Scramble() {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const scrambleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join(' ').trim();
  };

  const checkWord = () => {
    if (inputValue.toLowerCase().trim() === word.trim()) {
    let theWord=generateRandomWord();
      setScore(score + 10);
      setWord(theWord.word);
      setScrambledWord(scrambleWord(theWord.word.toLocaleLowerCase()))
      setHint(theWord.hint);
      setInputValue('');
    }
  };

  useEffect(() => {
    let theWord=generateRandomWord()
    const initialWord = theWord.word.toLowerCase();
    const hint=theWord.hint;
    setHint(hint);
    setWord(initialWord);
    setScrambledWord(scrambleWord(initialWord));
  }, []);

  return (
    <div className="scrambleConatiner">
      <div className="scrambleWrapper">
        <h2>Word Scramble Game</h2>

        <div>
          <h1>Word Unscramble Game</h1>
          <div>
            <p>Unscramble the word: {scrambledWord}</p>
            <br/>
            <p>{hint}</p>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={checkWord}>Check</button>
            {/* <button onClick={}>Refresh</button> */}
          </div>
          <div>
            <p>Score: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
