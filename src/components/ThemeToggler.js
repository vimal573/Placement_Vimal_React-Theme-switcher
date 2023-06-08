import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggler = () => {
  const [themeMode] = useContext(ThemeContext);

  return (
    <div>
      <span>{themeMode === 'light' ? 'Turn Off' : 'Lights On'}</span>
    </div>
  );
};

export default ThemeToggler;
