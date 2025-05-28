// ===========================================
// HEADER COMPONENT - OYUN BAŞLIĞI VE AÇIKLAMA
// ===========================================

import React from "react";

/**
 * Oyunun başlık ve açıklama bölümü
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  return (
    <header>
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
    </header>
  );
};

export default Header;
