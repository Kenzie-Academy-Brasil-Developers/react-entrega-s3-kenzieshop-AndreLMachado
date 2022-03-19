import { ADD_PRODUCTS, DEL_PRODUCTS } from "./actionTypes";

export const addProducts = (newProducts) => ({
  type: ADD_PRODUCTS,
  newProducts,
});

export const delProducts = (removedProducts) => ({
  type: DEL_PRODUCTS,
  removedProducts,
});
