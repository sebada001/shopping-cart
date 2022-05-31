import WatchPic from "../../img/watch.jpg";
import { useState, useEffect } from "react";

function Watch(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
  } = props;
  const [total, setTotal] = useState(0);
  let price = 30.25;
  const increaseTotal = function () {
    setTotal(total + 1);
    handleTotalPrice("increase", price);
    increaseTotalOfItem("Watch", price);
  };
  const decreaseTotal = function () {
    setTotal(total - 1);
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (total != 0) {
      decreaseTotal();
      decreaseTotalOfItem("Watch", price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{total}</p>
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
