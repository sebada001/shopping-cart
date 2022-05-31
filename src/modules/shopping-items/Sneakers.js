import SneakersPic from "../../img/sneakers.jpg";
import { useState } from "react";

function Sneakers(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
  } = props;
  const [total, setTotal] = useState(0);
  let price = 20;
  const increaseTotal = function () {
    setTotal(total + 1);
    handleTotalPrice("increase", price);
    increaseTotalOfItem("Sneakers", price);
  };
  const decreaseTotal = function () {
    setTotal(total - 1);
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (total != 0) {
      decreaseTotal();
      decreaseTotalOfItem("Sneakers", price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{total}</p>
        <button className="more" onClick={increaseTotal}>{`>`}</button>
      </div>
      <img src={SneakersPic} alt="sneakers" onMouseEnter={show}></img>
      <div className="product-text-group">
        <h4>Sneakers</h4>
        <p>${price}</p>
        <p className="product-description">
          These sneakers have been carefully manufactured to bring comfort to
          your malformed feet. They are cushy, cool looking, have a nice relaxed
          color, and they can actually float.
        </p>
      </div>
    </div>
  );
}

export default Sneakers;
