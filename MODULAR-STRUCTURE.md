# Assembly: Endgame - Modüler Yapı

## 📁 Proje Klasör Yapısı

```
src/
├── App.jsx                 # Ana uygulama componenti
├── App.css                 # Ana CSS dosyası
├── index.css               # Global stiller
├── main.jsx                # Uygulama giriş noktası
├── components/             # UI Componentleri
│   ├── index.js            # Components export dosyası
│   ├── Header.jsx          # Başlık ve açıklama
│   ├── GameStatus.jsx      # Oyun durumu mesajları
│   ├── LanguageChips.jsx   # Programlama dili chip'leri
│   ├── WordDisplay.jsx     # Kelime harfleri gösterimi
│   ├── Keyboard.jsx        # Sanal klavye
│   ├── ScreenReaderInfo.jsx # Erişilebilirlik bilgileri
│   ├── NewGameButton.jsx   # Yeni oyun butonu
│   ├── Language.jsx        # Tek dil chip'i
│   └── Language.css        # Dil chip'i stilleri
├── hooks/                  # Custom Hook'lar
│   └── useGame.js          # Oyun mantığı hook'u
├── constants/              # Sabit veriler
│   ├── languages.js        # Programlama dilleri
│   └── words.js            # Kelime listesi
└── utils/                  # Yardımcı fonksiyonlar
    └── utils.js            # Genel utility fonksiyonları
```

## 🧩 Component Yapısı

### App.jsx

- Ana component - tüm diğer componentleri organize eder
- `useGame` hook'unu kullanarak oyun state'ini yönetir
- Temiz ve okunabilir JSX yapısı

### useGame Hook

- Tüm oyun mantığını içerir
- State yönetimi ve hesaplamalar
- Component'lar arası veri akışını sağlar

### UI Components

- **Header**: Başlık ve açıklama
- **GameStatus**: Oyun durumu mesajları (kazanma/kaybetme/veda)
- **LanguageChips**: Programlama dillerinin görsel chip'leri
- **WordDisplay**: Tahmin edilecek kelimenin harfleri
- **Keyboard**: Sanal harf klavyesi
- **ScreenReaderInfo**: Erişilebilirlik için gizli bilgiler
- **NewGameButton**: Yeni oyun başlatma butonu

## 🚀 Avantajlar

1. **Modüler Yapı**: Her component tek bir sorumluluğa sahip
2. **Yeniden Kullanılabilirlik**: Component'lar bağımsız olarak kullanılabilir
3. **Bakım Kolaylığı**: Her dosya küçük ve odaklanmış
4. **Test Edilebilirlik**: Her component ayrı ayrı test edilebilir
5. **Okunabilirlik**: Kod yapısı anlaşılır ve düzenli

## 📦 Import/Export Yapısı

- `components/index.js` - Tüm component'ları tek yerden export eder
- Named export kullanımı ile temiz import'lar
- Absolute import path'ler ile net klasör yapısı

Bu yapı sayesinde proje çok daha profesyonel, maintainable ve scalable hale gelmiştir.
