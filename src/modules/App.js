import ShoppingArea from "./ShoppingArea";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoppingList, setShoppingList] = useState([]);
  //helper functions
  const matcher = function (item) {
    return shoppingList.find((obj) => {
      return obj.name === item;
    });
  };
  const filterer = function (item) {
    return shoppingList.filter((obj) => {
      return obj.name !== item;
    });
  };
  //
  const increaseTotalOfItem = function (item, price) {
    let match = matcher(item);
    let filter = filterer(item);
    if (match === undefined) {
      setShoppingList([
        { name: item, amount: 1, price: "$" + price },
        ...filter,
      ]);
      handleTotalPrice("increase", price);
      return;
    }
    match.amount += 1;
    match.price = "$" + price * match.amount;
    setShoppingList([match, ...filter]);
    handleTotalPrice("increase", price);
  };
  const decreaseTotalOfItem = function (item, price) {
    let match = matcher(item);
    let filter = filterer(item);
    match.amount -= 1;
    match.price = "$" + price * match.amount;
    setShoppingList([match, ...filter]);
    handleTotalPrice("decrease", price);
  };
  const handleTotalPrice = function (operation, amount) {
    if (operation === "increase") {
      handleIncreasePrice(amount);
    }
    if (operation === "decrease") {
      handleDecreasePrice(amount);
    }
  };
  const decreasePrice = function (amount) {
    setTotalPrice(totalPrice - amount);
  };
  const handleIncreasePrice = function (amount) {
    setTotalPrice(totalPrice + amount);
  };
  const handleDecreasePrice = function (amount) {
    if (totalPrice !== 0) {
      decreasePrice(amount);
    }
  };
  return (
    <div className="App">
      <Header totalPrice={totalPrice} shoppingList={shoppingList} />
      <ShoppingArea
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
        shoppingList={shoppingList}
        matcher={matcher}
      />
    </div>
  );
}

export default App;
