import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./modules/About";
import ShoppingArea from "./modules/ShoppingArea";
import Header from "./modules/Header";
import Checkout from "./modules/Checkout";

const RouteSwitch = (props) => {
  const {
    totalPrice,
    shoppingList,
    increaseTotalOfItem,
    decreaseTotalOfItem,
    handleTotalPrice,
  } = props;
  return (
    <BrowserRouter basename="/shopping-cart">
      <Header totalPrice={totalPrice} shoppingList={shoppingList} />
      <Routes>
        <Route
          path="/"
          element={
            <ShoppingArea
              shoppingList={shoppingList}
              increaseTotalOfItem={increaseTotalOfItem}
              decreaseTotalOfItem={decreaseTotalOfItem}
              handleTotalPrice={handleTotalPrice}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <Checkout totalPrice={totalPrice} shoppingList={shoppingList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
