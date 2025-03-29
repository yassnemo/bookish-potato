import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isHighContrast: boolean;
  toggleContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  useEffect(() => {
    // Check for user preferences in localStorage
    const storedTheme = localStorage.getItem("theme");
    const storedContrast = localStorage.getItem("highContrast");
    
    // Check system preference if no stored preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const prefersContrast = window.matchMedia("(prefers-contrast: more)").matches;
    
    // Set initial theme based on preferences
    const initialDarkMode = 
      storedTheme === "dark" || 
      (storedTheme === null && prefersDark);
      
    const initialHighContrast = 
      storedContrast === "true" || 
      (storedContrast === null && prefersContrast);
    
    setIsDarkMode(initialDarkMode);
    setIsHighContrast(initialHighContrast);
    
    // Apply theme to document
    applyTheme(initialDarkMode, initialHighContrast);
  }, []);

  const applyTheme = (dark: boolean, highContrast: boolean) => {
    // Apply dark/light mode
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      applyTheme(newMode, isHighContrast);
      return newMode;
    });
  };
  
  const toggleContrast = () => {
    setIsHighContrast((prev) => {
      const newMode = !prev;
      localStorage.setItem("highContrast", newMode ? "true" : "false");
      applyTheme(isDarkMode, newMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      isHighContrast, 
      toggleContrast 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
