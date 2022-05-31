import SunglassesPic from "../../img/sunglasses.jpg";
import { useState } from "react";

function Sunglasses(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
  } = props;
  const [total, setTotal] = useState(0);
  let price = 15;
  const increaseTotal = function () {
    setTotal(total + 1);
    handleTotalPrice("increase", price);
    increaseTotalOfItem("Sunglasses", price);
  };
  const decreaseTotal = function () {
    setTotal(total - 1);
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (total != 0) {
      decreaseTotal();
      decreaseTotalOfItem("Sunglasses", price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{total}</p>
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
