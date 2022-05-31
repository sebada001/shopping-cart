import SneakersPic from "../../img/sneakers.jpg";
import { useState } from "react";

function Sneakers(props) {
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
      <img src={SneakersPic} alt="sneakers" onMouseEnter={props.show}></img>
      <div className="product-text-group">
        <h4>Sneakers</h4>
        <p>$20.10</p>
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
