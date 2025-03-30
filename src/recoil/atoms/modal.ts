import { atom } from "recoil";

export type ModalType = "alert" | "confirm" | "custom";

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    isOpen: false,
    type: "alert",
    title: "",
    message: "",
  },
});
