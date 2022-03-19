import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CriaCard from "../../components/criaCard";

import "./style.css";

import imgCart from "../../assets/img/carrinho.jpg";

const Home = () => {
  const products = useSelector((store) => store.products);

  const history = useHistory();

  const irCart = () => {
    history.push("/cart");
  };

  const productsCart = useSelector((store) => store.productsCart);

  return (
    <div>
      <header>
        <div className="divHeader">
          <h3>Kenzie Shop</h3>
          <div className="headerRigth">
            <button className="buttonCart" onClick={irCart}>
              <img className="imgButtonCart" src={imgCart} alt="img"></img>
            </button>
            <span>{productsCart.length}</span>
            <button className="entrar">Entrar</button>
          </div>
        </div>
      </header>
      <div className="main">
        <ul>
          {products.map((produto) => (
            <CriaCard produto={produto} key={produto.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
