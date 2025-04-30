import { create } from "zustand";

type ToastAlertType = "info" | "error";

export type ToastType = {
  id: number;
  message: string;
  type: ToastAlertType;
};

type ToastStoreType = {
  toasts: ToastType[];
  addToast: (message: string, type?: ToastAlertType) => void;
  removeToast: (id: number) => void;
};

export const useToastStore = create<ToastStoreType>((set) => ({
  toasts: [],
  addToast: (message, type = "info") => {
    set((state) => ({
      toasts: [...state.toasts, { message, type, id: Date.now() }],
    }));
  },
  removeToast: (id: number) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
