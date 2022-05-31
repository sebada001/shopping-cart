import WatchPic from "../../img/watch.jpg";
import { useState } from "react";

function Watch(props) {
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
      <img src={WatchPic} alt="watch-picture" onMouseEnter={props.show} />
      <div className="product-text-group">
        <h4>Watch</h4>
        <p>$30.25</p>
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
