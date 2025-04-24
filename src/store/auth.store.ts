import { create } from "zustand";

type AuthType = {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
};

const getToken = localStorage.getItem("token");

export const useAuthStore = create<AuthType>((set) => ({
  isLoggedIn: !!getToken,
  storeLogin: (token: string) => {
    localStorage.setItem("token", token);
    set({ isLoggedIn: true });
  },
  storeLogout: () => {
    localStorage.removeItem("token");
    set({ isLoggedIn: false });
  },
}));
