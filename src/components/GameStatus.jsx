// ===========================================
// GAME STATUS COMPONENT - OYUN DURUMU MESAJLARI
// ===========================================

import React from "react";
import { clsx } from "clsx";
import { languages } from "../constants/languages";
import { getFarewellText } from "../utils/utils";

/**
 * Oyun durumu mesajlarını gösteren component
 * @param {Object} props - Component props
 * @param {boolean} props.isGameWon - Oyun kazanıldı mı?
 * @param {boolean} props.isGameLost - Oyun kaybedildi mi?
 * @param {boolean} props.isGameOver - Oyun bitti mi?
 * @param {boolean} props.isLastGuessIncorrect - Son tahmin yanlış mı?
 * @param {number} props.wrongGuessCount - Yanlış tahmin sayısı
 * @returns {JSX.Element} GameStatus component
 */
const GameStatus = ({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  wrongGuessCount,
}) => {
  // ===========================================
  // OYUN DURUMU RENDERER FONKSİYONU
  // ===========================================

  const renderGameStatus = () => {
    // Eğer oyun devam ediyor ve son tahmin yanlışsa veda mesajı göster
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    // Oyun kazanıldığında gösterilecek mesaj
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }

    // Oyun kaybedildiğinde gösterilecek mesaj
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    // Hiçbir özel durum yoksa null döndür
    return null;
  };

  // CSS class'larını belirle
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  );
};

export default GameStatus;
