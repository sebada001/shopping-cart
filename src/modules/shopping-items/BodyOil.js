import BodyOilPic from "../../img/body-oil.jpg";
import { useState } from "react";

function BodyOil(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Body-oil";
  const thisItem = shoppingList.find((item) => item.name === itemName);
  let price = 25;
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
      <img src={BodyOilPic} alt="watch-picture" onMouseEnter={show}></img>
      <div className="product-text-group">
        <h4>Bath & Body Oil</h4>
        <p>${price}</p>
        <p className="product-description">
          There are people that spend their entire lives studying and improving
          the technology and art of carefully crafting elegant fragrances so you
          don't stink.
        </p>
      </div>
    </div>
  );
}

export default BodyOil;
