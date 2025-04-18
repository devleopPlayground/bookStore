import { createContext, useEffect, useState } from "react";
import { getTheme, type ThemeName } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";

const DEFAULT_THEME_NAME = "light";
const THEME_STORAGE_KEY = "book_store_theme";

type State = {
  themeName: ThemeName;
  toggleTheme: () => void;
};

const state: State = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(
    localStorage.getItem(THEME_STORAGE_KEY) as ThemeName
  );

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme == "light" ? "dark" : "light"));

    localStorage.setItem(
      THEME_STORAGE_KEY,
      themeName == "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName;

    localStorage.setItem(THEME_STORAGE_KEY, currentTheme || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
