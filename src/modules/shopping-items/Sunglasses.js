import SunglassesPic from "../../img/sunglasses.jpg";
import { useState } from "react";

function Sunglasses(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Sunglasses";
  const thisItem = shoppingList.find((item) => item.name === itemName);
  let price = 15;
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
      <img src={SunglassesPic} alt="sunglasses" onMouseEnter={show}></img>
      <div className="product-text-group">
        <h4>Sunglasses</h4>
        <p>${price}</p>
        <p className="product-description">
          These are fantastic sunglasses. They will shade the world around your
          eyes as soon as you put them on. That's literally what they were made
          to do, and they do what they were made to do, unsurprisingly.
        </p>
      </div>
    </div>
  );
}

export default Sunglasses;
