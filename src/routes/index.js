import { Switch, Route } from "react-router-dom";
import CartProducts from "../pages/cart";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/cart"}>
        <CartProducts />
      </Route>
    </Switch>
  );
};

export default Routes;
