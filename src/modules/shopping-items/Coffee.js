import CoffeePic from "../../img/coffee-beans.jpg";
import { useState } from "react";

function Coffee(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Coffee";
  const thisItem = shoppingList.find((item) => item.name === itemName);
  let price = 16.5;
  const increaseTotal = function () {
    handleTotalPrice("increase", price);
    increaseTotalOfItem(itemName, price);
  };
  const decreaseTotal = function () {
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (thisItem.amount != 0) {
      decreaseTotal();
      decreaseTotalOfItem(itemName, price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{thisItem.amount}</p>
        <button className="more" onClick={increaseTotal}>{`>`}</button>
      </div>
      <img src={CoffeePic} alt="coffee" onMouseEnter={show}></img>
      <div className="product-text-group">
        <h4>Coffee Bag</h4>
        <p>${price}</p>
        <p className="product-description">
          Carefully picked, carefully roasted, carefully destoned, carefully
          tasted, carefully packaged, carefully marketized and quickly described
          in this effortless product description.
        </p>
      </div>
    </div>
  );
}

export default Coffee;
