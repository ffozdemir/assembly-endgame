// ===========================================
// LANGUAGE COMPONENT - PROGRAMLAMA DİLİ CHIP'İ
// ===========================================

import React from "react";
import "./Language.css";

/**
 * Programlama dili chip bileşeni
 * @param {string} name - Dilin adı
 * @param {string} backgroundColor - Arkaplan rengi
 * @param {string} color - Metin rengi
 * @param {string} className - CSS sınıfı (lost durumu için)
 */
const Language = ({ name, backgroundColor, color, className }) => {
  // Inline stil objesi - her dil için özel renkler
  const styles = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <div style={styles} className={className}>
      {name}
    </div>
  );
};

export default Language;
