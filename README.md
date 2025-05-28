# Assembly: Endgame - Modular Structure

## 📁 Project Folder Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Main CSS file
├── index.css               # Global styles
├── main.jsx                # Application entry point
├── components/             # UI Components
│   ├── index.js            # Components export file
│   ├── Header.jsx          # Title and description
│   ├── GameStatus.jsx      # Game status messages
│   ├── LanguageChips.jsx   # Programming language chips
│   ├── WordDisplay.jsx     # Word letters display
│   ├── Keyboard.jsx        # Virtual keyboard
│   ├── ScreenReaderInfo.jsx # Accessibility information
│   ├── NewGameButton.jsx   # New game button
│   ├── Language.jsx        # Single language chip
│   └── Language.css        # Language chip styles
├── hooks/                  # Custom Hooks
│   └── useGame.js          # Game logic hook
├── constants/              # Constant data
│   ├── languages.js        # Programming languages
│   └── words.js            # Word list
└── utils/                  # Helper functions
   └── utils.js            # General utility functions
```

## 🧩 Component Structure

### App.jsx

- Main component - organizes all other components
- Uses `useGame` hook to manage game state
- Clean and readable JSX structure

### useGame Hook

- Contains all game logic
- State management and calculations
- Provides data flow between components

### UI Components

- **Header**: Title and description
- **GameStatus**: Game status messages (win/lose/farewell)
- **LanguageChips**: Visual chips for programming languages
- **WordDisplay**: Letters of the word to be guessed
- **Keyboard**: Virtual letter keyboard
- **ScreenReaderInfo**: Hidden information for accessibility
- **NewGameButton**: Start new game button

## 🚀 Advantages

1. **Modular Structure**: Each component has a single responsibility
2. **Reusability**: Components can be used independently
3. **Maintainability**: Each file is small and focused
4. **Testability**: Each component can be tested separately
5. **Readability**: Code structure is clear and organized

## 📦 Import/Export Structure

- `components/index.js` - Exports all components from a single place
- Clean imports using named exports
- Clear folder structure with absolute import paths

Thanks to this structure, the project has become much more professional, maintainable and scalable.

