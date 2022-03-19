import { createStore, combineReducers, applyMiddleware } from "redux";

import productsReducer from "./modules/products/reducer";

import cartReducer from "./modules/collection/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  productsCart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
