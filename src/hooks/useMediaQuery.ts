import { getTheme } from "@src/styles/theme";
import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(getTheme("light").mediaQuery.mobile).matches
  );

  useEffect(() => {
    const isMobileQuery = window.matchMedia(
      getTheme("light").mediaQuery.mobile
    );

    const handleChange = () => {
      setIsMobile(isMobileQuery.matches);
    };

    isMobileQuery.addEventListener("change", handleChange);

    return () => isMobileQuery.removeEventListener("change", handleChange);
  }, []);

  return { isMobile };
};

export default useMediaQuery;
