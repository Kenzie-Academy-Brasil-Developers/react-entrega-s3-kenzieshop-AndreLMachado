import { ADD_PRODUCTS, DEL_PRODUCTS } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("productsCart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const { newProducts } = action;
      return [...state, newProducts];

    case DEL_PRODUCTS:
      const { removedProducts } = action;
      const newProductsList = state.filter(
        (product) => product.id !== removedProducts.id
      );

      return newProductsList;

    default:
      return state;
  }
};

export default cartReducer;
