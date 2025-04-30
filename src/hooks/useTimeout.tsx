import { useEffect } from "react";

const useTimeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    const time = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [callback, delay]);
};

export default useTimeout;
