import CriaCardCart from "../cardCart";
import { useSelector } from "react-redux";

const MapCart = () => {
  const productsCart = useSelector((store) => store.productsCart);

  return (
    <ul className="listCart">
      {productsCart.map((produto, index) => (
        <CriaCardCart produto={produto} key={index} />
      ))}
    </ul>
  );
};

export default MapCart;
