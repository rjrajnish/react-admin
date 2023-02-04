import React, { useState } from 'react';

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: 'black',
    color: 'white'
  }
};

function ThemeToggler() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div style={themes[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
