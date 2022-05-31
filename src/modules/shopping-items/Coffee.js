import CoffeePic from "../../img/coffee-beans.jpg";
import { useState } from "react";

function Coffee(props) {
  const [total, setTotal] = useState(0);
  const increaseTotal = function () {
    setTotal(total + 1);
  };
  const decreaseTotal = function () {
    setTotal(total - 1);
  };
  const handleDecreaseTotal = function () {
    if (total != 0) {
      decreaseTotal();
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={props.hide}>
        <button className="less" onClick={handleDecreaseTotal}>{`<`}</button>
        <p className="current-total">{total}</p>
        <button className="more" onClick={increaseTotal}>{`>`}</button>
      </div>
      <img src={CoffeePic} alt="coffee" onMouseEnter={props.show}></img>
      <div className="product-text-group">
        <h4>Coffee Bag</h4>
        <p>$16.75</p>
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
