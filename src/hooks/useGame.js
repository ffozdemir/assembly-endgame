// ===========================================
// CUSTOM HOOK - OYUN LOGİĞİ
// ===========================================

import { useState } from "react";
import { languages } from "../constants/languages";
import { getRandomWord } from "../utils/utils";

/**
 * Oyun mantığını yöneten custom hook
 * @returns {Object} Oyun state'i ve fonksiyonları
 */
export const useGame = () => {
  // ===========================================
  // STATE YÖNETİMİ
  // ===========================================

  // Oyunun mevcut kelimesi - rastgele seçilir
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

  // Kullanıcının tahmin ettiği harfler
  const [guessedLetters, setGuessedLetters] = useState([]);

  // ===========================================
  // OYUN LOGİĞİ HESAPLAMALARI
  // ===========================================

  // Kalan tahmin hakkı sayısı
  const numGuessesLeft = languages.length - 1;

  // Maksimum yanlış tahmin sayısı (dil sayısı kadar)
  const maxWrongCount = languages.length;

  // Şu ana kadar yapılan yanlış tahmin sayısı
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  // Oyun kazanıldı mı? (Tüm harfler tahmin edildi mi?)
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Oyun kaybedildi mi? (Maksimum yanlış sayısına ulaşıldı mı?)
  const isGameLost = wrongGuessCount >= maxWrongCount;

  // Oyun sona erdi mi?
  const isGameOver = isGameWon || isGameLost;

  // Son tahmin edilen harf
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  // Son tahmin yanlış mıydı?
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // ===========================================
  // OYUN FONKSİYONLARI
  // ===========================================

  // Tahmin edilen harfi state'e ekleyen fonksiyon
  const addGuessedLetter = (letter) => {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  };

  // Oyunu sıfırlayan fonksiyon
  const restartGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  };

  // ===========================================
  // RETURN VALUES
  // ===========================================

  return {
    // Game state
    currentWord,
    guessedLetters,
    numGuessesLeft,
    wrongGuessCount,
    isGameWon,
    isGameLost,
    isGameOver,
    lastGuessedLetter,
    isLastGuessIncorrect,

    // Game actions
    addGuessedLetter,
    restartGame,
  };
};
