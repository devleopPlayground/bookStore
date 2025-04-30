import { useToastStore } from "@src/store/toast.store";

const useToast = () => {
  const showToast = useToastStore((state) => state.addToast);

  return { showToast };
};

export default useToast;
