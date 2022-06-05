import { useState } from "react";
import RouteSwitch from "../RouteSwitch";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoppingList, setShoppingList] = useState([
    { name: "Sneakers", amount: 0, price: 20 },
  ]);
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
  const handleSetShoppingItems = function (item, amount, price, filtered) {
    setShoppingList([
      { name: item, amount: amount, price: "$" + price },
      ...filtered,
    ]);
  };
  //
  const increaseTotalOfItem = function (item, price) {
    let match = matcher(item);
    let filter = filterer(item);
    if (match === undefined) {
      let amount = 1;
      handleSetShoppingItems(item, amount, price, filter);
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
      <RouteSwitch
        totalPrice={totalPrice}
        shoppingList={shoppingList}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
        handleTotalPrice={handleTotalPrice}
      />
    </div>
  );
}

export default App;
