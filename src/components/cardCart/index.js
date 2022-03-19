import { useDispatch } from "react-redux";

import { remToCartThunk } from "../../store/modules/collection/thunk";

import "./style.css";

const CriaCardCart = ({ produto }) => {
  const dispatch = useDispatch();

  return (
    <li className="CardCart">
      <img src={produto.img} alt="img" />
      <p>{produto.titulo}</p>
      <p>{produto.preco}</p>
      <button onClick={() => dispatch(remToCartThunk(produto))}>
        Remover do Carrinho
      </button>
    </li>
  );
};

export default CriaCardCart;
