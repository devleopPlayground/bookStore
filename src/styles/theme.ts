export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

export interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightGray",
    secondary: "",
    third: "",
  },
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightBlue",
    secondary: "",
    third: "",
  },
};

export const getTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case "dark":
      return dark;
    case "light":
      return light;
  }
};

declare module "styled-components" {
  export interface DefaultTheme {
    color: Record<ColorKey, string>;
  }
}
