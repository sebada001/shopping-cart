import CoffeePic from "../../img/coffee-beans.jpg";
import { useState } from "react";

function Coffee(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
  } = props;
  const [total, setTotal] = useState(0);
  let price = 16.75;
  const increaseTotal = function () {
    setTotal(total + 1);
    handleTotalPrice("increase", price);
    increaseTotalOfItem("Coffee", price);
  };
  const decreaseTotal = function () {
    setTotal(total - 1);
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (total != 0) {
      decreaseTotal();
      decreaseTotalOfItem("Coffee", price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{total}</p>
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
