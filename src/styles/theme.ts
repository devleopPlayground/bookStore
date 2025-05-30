export type ThemeName = "light" | "dark";
export type ColorKey =
  | "primary"
  | "background"
  | "secondary"
  | "third"
  | "border"
  | "text";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal" | "like";
export type LayoutWidth = "large" | "medium" | "small";
export type MediaQuery = "mobile" | "tablet" | "desktop";

export interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  button: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
  mediaQuery: {
    [key in MediaQuery]: string;
  };
}

const heading = {
  large: {
    fontSize: "2rem",
  },
  medium: {
    fontSize: "1.5rem",
  },
  small: {
    fontSize: "1 rem",
  },
};

const button = {
  large: {
    fontSize: "1.5rem",
    padding: "0.75rem 1.5rem",
  },
  medium: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
  },
  small: {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
  },
};

const buttonScheme = {
  primary: {
    color: "white",
    backgroundColor: "midnightblue",
  },
  normal: {
    color: "black",
    backgroundColor: "ligthgray",
  },
  like: {
    color: "white",
    backgroundColor: "coral",
  },
};

const borderRadius = {
  default: "4px",
};

const layout = {
  width: {
    large: "1020px",
    medium: "760px",
    small: "320px",
  },
};

const mediaQuery = {
  mobile: "(max-width: 768px)", // 768px 이하에서 동작
  desktop: "(max-width: 1024px)", // 1024px 이하에서 동작
  tablet: "(min-width: 1025px)", // 1025px 이상에서 동작
};

const settings = {
  heading,
  button,
  buttonScheme,
  borderRadius,
  layout,
  mediaQuery,
};

export const light: Theme = {
  name: "light",
  color: {
    primary: "#ff5800",
    background: "#5f5f5f",
    secondary: "lightgray",
    third: "green",
    border: "gray",
    text: "black",
  },
  ...settings,
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "drakblue",
    third: "darkgreen",
    border: "gray",
    text: "black",
  },
  ...settings,
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
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      };
    };
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      };
    };
    buttonScheme: {
      [key in ButtonScheme]: {
        color: string;
        backgroundColor: string;
      };
    };
    borderRadius: {
      default: string;
    };
    layout: {
      width: {
        [key in LayoutWidth]: string;
      };
    };
    mediaQuery: {
      [key in MediaQuery]: string;
    };
  }
}
