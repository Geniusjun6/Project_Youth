import { create } from "zustand";
import { verifyAccessToken } from "../../components/(service)/nav.service";

export interface SignInStore {
  isSignIn: boolean;
  setLogIn: () => void;
  setLogOut: () => void;
}

export const useSignInStore = create<SignInStore>()((set) => ({
  isSignIn: localStorage.getItem("accessToken") ? verifyAccessToken(localStorage.getItem("accessToken")) : false,
  setLogIn: () => set({ isSignIn: true }),
  setLogOut: () => set({ isSignIn: false })
}));
