import { useDispatch } from "react-redux";

import { addToCartThunk } from "../../store/modules/collection/thunk";

const CriaCard = ({ produto }) => {
  const dispatch = useDispatch();

  return (
    <li className="CardProuto">
      <img src={produto.img} alt="img" />
      <p>{produto.titulo}</p>
      <p>{produto.preco}</p>
      <p>{produto.descricao}</p>
      <button onClick={() => dispatch(addToCartThunk(produto))}>
        Adicionar ao Carrinho
      </button>
    </li>
  );
};

export default CriaCard;
