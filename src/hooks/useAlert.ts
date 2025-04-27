import { useCallback } from "react";

const useAlert = () => {
  const showConfirm = useCallback((message: string, onConfirm: () => void) => {
    if (confirm(message)) {
      onConfirm();
    }
  }, []);

  return { showConfirm };
};

export default useAlert;
