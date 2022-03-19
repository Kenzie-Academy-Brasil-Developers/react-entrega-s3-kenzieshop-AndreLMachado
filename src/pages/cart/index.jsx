import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MapCart from "../../components/MapCart";
import TotalMoney from "../../components/TotalMoney";
import "./style.css";

const CartProducts = () => {
  const productsCart = useSelector((store) => store.productsCart);

  const history = useHistory();

  const irHome = () => {
    history.push("/");
  };

  return (
    <div className="body">
      <header className="headerCart">
        <div className="divHeader">
          <h3>Kenzie Shop</h3>
          <div className="buttonSpan">
            <div className="total">
              <span>Quantidade de Produtos {productsCart.length} un</span>
              <span>
                Valor total: R$ <TotalMoney productsCart={productsCart} />
              </span>
            </div>
            <div className="buttonsRHeader">
              <button className="buttonHome" onClick={irHome}>
                Voltar ao Shop
              </button>
              <button className="buttonHome" onClick={irHome}>
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mainCart">
        <MapCart />
      </div>
    </div>
  );
};

export default CartProducts;
