import { atom } from "recoil";

interface ErrorState {
  message: string;
  code?: string;
  isVisible: boolean;
}

export const errorState = atom<ErrorState>({
  key: "errorState",
  default: {
    message: "",
    code: "",
    isVisible: false,
  },
});
