import NintendoPic from "../../img/nintendo-ds.jpg";
import { useState } from "react";

function Nintendo(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Nintendo";
  const thisItem = shoppingList.find((item) => item.name === itemName);
  let price = 300;
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
      <img src={NintendoPic} alt="nintendo" onMouseEnter={show}></img>
      <div className="product-text-group">
        <h4>Nintendo DS</h4>
        <p>${price}</p>
        <p className="product-description">
          Great portable gaming station, fabricated by the illustrious Nintendo
          corporation, they do many things related to the gaming industry,
          mainly stopping you from growing up and becoming an adult.
        </p>
      </div>
    </div>
  );
}

export default Nintendo;
