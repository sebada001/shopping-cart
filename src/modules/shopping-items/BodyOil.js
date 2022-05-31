import BodyOilPic from "../../img/body-oil.jpg";
import { useState } from "react";

function BodyOil(props) {
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
      <img src={BodyOilPic} alt="watch-picture" onMouseEnter={props.show}></img>
      <div className="product-text-group">
        <h4>Bath & Body Oil</h4>
        <p>$14</p>
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
