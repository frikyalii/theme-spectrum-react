import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, THEMES } from '@/types/theme';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeforge-theme') as ThemeType;
    if (savedTheme && THEMES[savedTheme]) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setIsTransitioning(true);
    
    // Add transition class
    document.body.classList.add('theme-transition-enter');
    
    setTimeout(() => {
      setCurrentTheme(theme);
      localStorage.setItem('themeforge-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      
      // Remove transition class after theme change
      setTimeout(() => {
        document.body.classList.remove('theme-transition-enter');
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};