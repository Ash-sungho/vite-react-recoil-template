import { atom } from "recoil";
import { LoginResponse } from "../../api/types";

export const authState = atom<LoginResponse | null>({
  key: "authState",
  default: null,
});

export const isAuthenticatedState = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
});
