import SneakersPic from "../../img/sneakers.jpg";

function Sneakers(props) {
  const {
    decreaseTotalOfItem,
    increaseTotalOfItem,
    handleTotalPrice,
    hide,
    show,
    shoppingList,
  } = props;
  const itemName = "Sneakers";
  const thisItem = shoppingList.find((item) => item.name === itemName);

  let price = 20;
  const increaseTotal = function () {
    handleTotalPrice("increase", price);
    increaseTotalOfItem(itemName, price);
  };
  const decreaseTotal = function () {
    handleTotalPrice("decrease", price);
  };
  const handleLocalTotal = function () {
    if (thisItem.amount != 0) {
      decreaseTotal();
      decreaseTotalOfItem(itemName, price);
    }
  };
  return (
    <div className="product-container big">
      <div className="hover-item" onMouseOut={hide}>
        <button className="less" onClick={handleLocalTotal}>{`<`}</button>
        <p className="current-total">{thisItem.amount}</p>
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
