// ===========================================
// SCREEN READER INFO COMPONENT - ERİŞİLEBİLİRLİK
// ===========================================

import React from "react";

/**
 * Ekran okuyucular için gizli bilgi componenti
 * @param {Object} props - Component props
 * @param {string} props.currentWord - Mevcut kelime
 * @param {string} props.lastGuessedLetter - Son tahmin edilen harf
 * @param {Array} props.guessedLetters - Tahmin edilen harfler
 * @param {number} props.numGuessesLeft - Kalan tahmin hakkı
 * @returns {JSX.Element} ScreenReaderInfo component
 */
const ScreenReaderInfo = ({
  currentWord,
  lastGuessedLetter,
  guessedLetters,
  numGuessesLeft,
}) => {
  return (
    <section className="sr-only" aria-live="polite" role="status">
      <p>
        {currentWord.includes(lastGuessedLetter)
          ? `Correct! The letter ${lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
        You have {numGuessesLeft} attempts left.
      </p>
      <p>
        Current word:{" "}
        {currentWord
          .split("")
          .map((letter) =>
            guessedLetters.includes(letter) ? letter + "." : "blank."
          )
          .join(" ")}
      </p>
    </section>
  );
};

export default ScreenReaderInfo;
