import WatchPic from "../../img/watch.jpg";
import { useState, useEffect } from "react";

function Watch(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Watch";
  const thisItem = shoppingList.find((item) => item.name === itemName);
  let price = 30.25;
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
      <img src={WatchPic} alt="watch-picture" onMouseEnter={show} />
      <div className="product-text-group">
        <h4>Watch</h4>
        <p>${price}</p>
        <p className="product-description">
          This a great wrist watch. As you can see, it has a whole galaxy
          inside. It is not just a visual effect to look cool and impress other
          people, it is, indeed, an entire galaxy.
        </p>
      </div>
    </div>
  );
}

export default Watch;
