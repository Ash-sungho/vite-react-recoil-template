import { selector } from "recoil";
import { authState } from "../atoms/auth";

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth?.user || null;
  },
});

export const tokenSelector = selector({
  key: "tokenSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth?.token || null;
  },
});
