import SunglassesPic from "../../img/sunglasses.jpg";
import { useState } from "react";

function Sunglasses(props) {
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
      <img src={SunglassesPic} alt="sunglasses" onMouseEnter={props.show}></img>
      <div className="product-text-group">
        <h4>Sunglasses</h4>
        <p>$15.50</p>
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
