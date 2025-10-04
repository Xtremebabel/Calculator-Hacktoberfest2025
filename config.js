// config.js - Application configuration and constants
const CALCULATOR_CONFIG = {
    // Display settings
    maxDisplayLength: 15,
    decimalPlaces: 10,
    scientificNotationThreshold: 1e12,
    
    // Theme settings
    themes: {
        dark: {
            primary: '#1a1a2e',
            secondary: '#16213e',
            accent: '#4cc9f0',
            text: '#ffffff'
        },
        light: {
            primary: '#ffffff',
            secondary: '#f0f0f0',
            accent: '#2575fc',
            text: '#333333'
        },
        hacker: {
            primary: '#0a0a0a',
            secondary: '#00ff00',
            accent: '#00ff00',
            text: '#00ff00'
        },
        solarized: {
            primary: '#002b36',
            secondary: '#073642',
            accent: '#268bd2',
            text: '#839496'
        }
    },
    
    // Memory settings
    maxMemorySlots: 5,
    memoryLabels: ['M1', 'M2', 'M3', 'M4', 'M5'],
    
    // History settings
    maxHistoryItems: 50,
    autoSaveHistory: true,
    
    // Keyboard shortcuts
    shortcuts: {
        'equals': ['Enter', '='],
        'clear': ['Escape'],
        'backspace': ['Backspace'],
        'add': ['+'],
        'subtract': ['-'],
        'multiply': ['*', 'x'],
        'divide': ['/'],
        'decimal': ['.'],
        'sin': ['s', 'S'],
        'cos': ['c', 'C'],
        'tan': ['t', 'T']
    },
    
    // Sound settings
    soundEnabled: false,
    soundVolume: 0.3,
    
    // Calculation precision
    precision: 0.0000000001
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CALCULATOR_CONFIG;
}
