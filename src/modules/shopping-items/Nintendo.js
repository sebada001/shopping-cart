import NintendoPic from "../../img/nintendo-ds.jpg";
import { useState } from "react";

function Nintendo(props) {
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
      <img src={NintendoPic} alt="nintendo" onMouseEnter={props.show}></img>
      <div className="product-text-group">
        <h4>Nintendo DS</h4>
        <p>$300</p>
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
