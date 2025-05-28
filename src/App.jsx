// React ve gerekli kütüphanelerin importları
import { useState } from "react";
import "./App.css";
import Language from "./Language";
import { languages } from "./languages";
import { clsx } from "clsx"; // CSS class'larını dinamik olarak yönetmek için
import { getFarewellText, getRandomWord } from "./utils";

function App() {
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

  // ===========================================
  // UI ELEMENTLER - KLAVYE
  // ===========================================

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
        onClick={() => addGuessedLetter(letter)}
        disabled={isGameOver || isGuessed}
        aria-label={`Guess letter ${letter}`}
        aria-disabled={guessedLetters.includes(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  // ===========================================
  // UI ELEMENTLER - KELİME HARFLER
  // ===========================================

  // Kelimenin harflerini gösteren elementler
  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  // ===========================================
  // UI ELEMENTLER - PROGRAMLAMA DİLLERİ
  // ===========================================

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

  // ===========================================
  // OYUN DURUMU RENDERER FONKSİYONU
  // ===========================================

  // Oyunun mevcut durumuna göre mesaj gösterme fonksiyonu
  function renderGameStatus() {
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
  }

  // ===========================================
  // YENİ OYUN FONKSİYONU
  // ===========================================

  // Oyunu sıfırlayan fonksiyon
  const restartGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  };

  // ===========================================
  // CSS CLASS YÖNETİMİ
  // ===========================================

  // Oyun durumuna göre CSS sınıflarını belirle
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  // ===========================================
  // COMPONENT RENDER
  // ===========================================

  return (
    <main>
      {/* BAŞLIK VE AÇIKLAMA */}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      {/* OYUN DURUMU MESAJLARI */}
      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatus()}
      </section>

      {/* PROGRAMLAMA DİLLERİ CHIP'LERİ */}
      <section className="language-chips">{languageElements}</section>

      {/* KELİME HARFLER */}
      <section className="word">{letterElements}</section>

      {/* ERİŞİLEBİLİRLİK İÇİN GİZLİ DURUM BİLGİSİ */}
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

      {/* KLAVYE */}
      <section className="keyboard">{keyboardElements}</section>

      {/* YENİ OYUN BUTONU */}
      {isGameOver && (
        <button onClick={restartGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
