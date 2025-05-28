// ===========================================
// WORD DISPLAY COMPONENT - KELİME HARFLER
// ===========================================

import React from "react";
import { clsx } from "clsx";

/**
 * Tahmin edilecek kelimenin harflerini gösteren component
 * @param {Object} props - Component props
 * @param {string} props.currentWord - Mevcut kelime
 * @param {Array} props.guessedLetters - Tahmin edilen harfler
 * @param {boolean} props.isGameLost - Oyun kaybedildi mi?
 * @returns {JSX.Element} WordDisplay component
 */
const WordDisplay = ({ currentWord, guessedLetters, isGameLost }) => {
  // Kelimenin harflerini gösteren elementler
  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );

    return (
      <span key={`${letter}-${index}`} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{letterElements}</section>;
};

export default WordDisplay;
