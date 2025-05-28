// ===========================================
// NEW GAME BUTTON COMPONENT - YENİ OYUN BUTONU
// ===========================================

import React from "react";

/**
 * Yeni oyun başlatma butonu
 * @param {Object} props - Component props
 * @param {boolean} props.isGameOver - Oyun bitti mi?
 * @param {Function} props.onRestart - Oyunu yeniden başlatma fonksiyonu
 * @returns {JSX.Element} NewGameButton component
 */
const NewGameButton = ({ isGameOver, onRestart }) => {
  // Oyun bitmemişse butonu gösterme
  if (!isGameOver) {
    return null;
  }

  return (
    <button type="button" onClick={onRestart} className="new-game">
      New Game
    </button>
  );
};

export default NewGameButton;
