// ===========================================
// KEYBOARD COMPONENT - HARF KLAVYESI
// ===========================================

import React from "react";
import { clsx } from "clsx";

/**
 * Sanal klavye componentı
 * @param {Object} props - Component props
 * @param {Array} props.guessedLetters - Tahmin edilen harfler
 * @param {string} props.currentWord - Mevcut kelime
 * @param {boolean} props.isGameOver - Oyun bitti mi?
 * @param {Function} props.onLetterGuess - Harf tahmin fonksiyonu
 * @returns {JSX.Element} Keyboard component
 */
const Keyboard = ({
  guessedLetters,
  currentWord,
  isGameOver,
  onLetterGuess,
}) => {
  // Alfabedeki tüm harfler
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Klavye butonlarını oluşturan kod
  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    // Buton için CSS class'larını belirle
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={letter}
        onClick={() => onLetterGuess(letter)}
        disabled={isGameOver || isGuessed}
        aria-label={`Guess letter ${letter}`}
        aria-disabled={guessedLetters.includes(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboardElements}</section>;
};

export default Keyboard;
