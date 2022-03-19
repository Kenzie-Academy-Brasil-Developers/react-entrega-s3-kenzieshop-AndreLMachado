import { addProducts, delProducts } from "./actions";
import { v4 as uuid } from "uuid";

export const addToCartThunk = (product) => (dispatch) => {
  console.log(product);
  product = {
    img: product.img,
    alt: product.alt,
    preco: product.preco,
    descricao: product.descricao,
    filtro: product.filtro,
    titulo: product.titulo,
    id: uuid(),
  };

  const list = JSON.parse(localStorage.getItem("productsCart")) || [];

  const newList = [...list, product];

  localStorage.setItem("productsCart", JSON.stringify(newList));

  dispatch(addProducts(product));
};

export const remToCartThunk = (product) => (dispatch) => {
  console.log(product);
  const list = JSON.parse(localStorage.getItem("productsCart")) || [];

  const newList = list.filter((products) => products.id !== product.id);

  localStorage.setItem("productsCart", JSON.stringify(newList));

  dispatch(delProducts(product));
};
