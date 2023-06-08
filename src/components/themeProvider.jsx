import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const themeStyles = {
    light: {
      '--background-color': '#f8f8f8',
      '--text-color': '#333',
      '--header-background-color': '#fff',
      '--button-background-color': '#333',
      '--button-color': '#fff',
      '--content-background-color': '#fff',
      '--content-text-color': '#333',
    },
    dark: {
      '--background-color': '#222',
      '--text-color': '#eee',
      '--header-background-color': '#333',
      '--button-background-color': '#fff',
      '--button-color': '#333',
      '--content-background-color': '#333',
      '--content-text-color': '#eee',
    },
  };

  const themeValues = {
    theme,
    toggleTheme,
    styles: themeStyles[theme],
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      <div style={themeValues.styles}>{children}</div>
    </ThemeContext.Provider>
  );
};
