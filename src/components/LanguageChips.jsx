// ===========================================
// LANGUAGE CHIPS COMPONENT - PROGRAMLAMA DİLLERİ
// ===========================================

import React from "react";
import { clsx } from "clsx";
import Language from "./Language";
import { languages } from "../constants/languages";

/**
 * Programlama dillerinin chip'lerini gösteren component
 * @param {Object} props - Component props
 * @param {number} props.wrongGuessCount - Yanlış tahmin sayısı
 * @returns {JSX.Element} LanguageChips component
 */
const LanguageChips = ({ wrongGuessCount }) => {
  // Programlama dillerinin chip'lerini oluşturan kod
  const languageElements = languages.map((language, index) => {
    const className = clsx("chip", index < wrongGuessCount && "lost");
    return (
      <Language
        key={language.name}
        name={language.name}
        backgroundColor={language.backgroundColor}
        color={language.color}
        className={className}
      />
    );
  });

  return <section className="language-chips">{languageElements}</section>;
};

export default LanguageChips;
