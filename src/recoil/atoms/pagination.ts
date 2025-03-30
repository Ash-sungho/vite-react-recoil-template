import { atom } from "recoil";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export const paginationState = atom<PaginationState>({
  key: "paginationState",
  default: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
    totalItems: 0,
  },
});
