import { useState } from "react";
import "./App.css";
import Language from "./Language";
import { languages } from "./languages";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

   const alphabet = "abcdefghijklmnopqrstuvwxyz";

   const alphabetElements = alphabet.split("").map((letter, index) => (
    <button key={index}>
      {letter.toUpperCase()}
    </button>
  ));

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>
      {letter.toUpperCase()}
    </span>
  ));

  const languageElements = languages.map((language) => (
    <Language
      key={language.name}
      name={language.name}
      backgroundColor={language.backgroundColor}
      color={language.color}
    />
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done!</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard" >
        {alphabetElements}
      </section>
    </main>
  );
}

export default App;
