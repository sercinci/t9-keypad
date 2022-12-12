import React, { useCallback, useState } from "react";
import { computeWords } from "./wordsFromNumber";
import "./App.css";

const PHONE_KEYS = [
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function App() {
  const [words, setWords] = useState([] as Array<string | undefined>);
  const [digits, setDigits] = useState("" as string);

  const digitInputHandler = useCallback(
    async (input: number) => {
      if (input === 1) return;
      const newInput = digits + input;
      setDigits(newInput);
      // API call simulation
      const wordList = await computeWords(newInput);
      setWords(wordList);
    },
    [digits]
  );

  const clearHandler = () => {
    setDigits("");
    setWords([]);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>T9 Phone Keypad</h1>
      </header>
      <main className="App__main">
        <section className="App__digits">
          <p>{digits}</p>
          {digits !== "" && <button className="App__clear" onClick={clearHandler}>{"[X]"}</button>}
        </section>
        <section className="App__keyboard">
          {PHONE_KEYS.map((text, digit) => (
            <button key={digit} onClick={() => digitInputHandler(digit)}>
              <p className="App__key--bold">{++digit}</p> {text.toUpperCase()}
            </button>
          ))}
        </section>
        <section className="App__words">
          {words.map((word) => (
            <span className="App__word" key={word}>
              {word}
            </span>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
