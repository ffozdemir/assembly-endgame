// ===========================================
// MAIN APP COMPONENT - MOD{LER YAPI
// ===========================================

import React from "react";
import "./App.css";
import { useGame } from "./hooks/useGame";
import {
  Header,
  GameStatus,
  LanguageChips,
  WordDisplay,
  Keyboard,
  ScreenReaderInfo,
  NewGameButton,
} from "./components";

/**
 * Ana uygulama componenti - Modüler yapı ile düzenlenmiş
 * @returns {JSX.Element} App component
 */
function App() {
  // ===========================================
  // CUSTOM HOOK İLE OYUN LOGİĞİ
  // ===========================================

  const {
    currentWord,
    guessedLetters,
    numGuessesLeft,
    wrongGuessCount,
    isGameWon,
    isGameLost,
    isGameOver,
    lastGuessedLetter,
    isLastGuessIncorrect,
    addGuessedLetter,
    restartGame,
  } = useGame();

  // ===========================================
  // COMPONENT RENDER - MOD{LER YAPI
  // ===========================================

  return (
    <main>
      {/* BAŞLIK VE AÇIKLAMA */}
      <Header />

      {/* OYUN DURUMU MESAJLARI */}
      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />

      {/* PROGRAMLAMA DİLLERİ CHIP'LERİ */}
      <LanguageChips wrongGuessCount={wrongGuessCount} />

      {/* KELİME HARFLER */}
      <WordDisplay
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      {/* ERİŞİLEBİLİRLİK İÇİN GİZLİ DURUM BİLGİSİ */}
      <ScreenReaderInfo
        currentWord={currentWord}
        lastGuessedLetter={lastGuessedLetter}
        guessedLetters={guessedLetters}
        numGuessesLeft={numGuessesLeft}
      />

      {/* KLAVYE */}
      <Keyboard
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
        onLetterGuess={addGuessedLetter}
      />

      {/* YENİ OYUN BUTONU */}
      <NewGameButton isGameOver={isGameOver} onRestart={restartGame} />
    </main>
  );
}

export default App;
