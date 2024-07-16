// atoms.jsx
import { atom } from "recoil";

export const productListState = atom({
  key: "productListState",
  default: [],
});