import Sunglasses from "./shopping-items/Sunglasses";
import Watch from "./shopping-items/Watch";
import Sneakers from "./shopping-items/Sneakers";
import Coffee from "./shopping-items/Coffee";
import Nintendo from "./shopping-items/Nintendo";
import BodyOil from "./shopping-items/BodyOil";

function ShoppingArea(props) {
  const {
    increaseTotalOfItem,
    decreaseTotalOfItem,
    handleTotalPrice,
    shoppingList,
  } = props;
  function showHoverItem(e) {
    let hoverItem = e.currentTarget.parentElement.querySelector(".hover-item");
    hoverItem.style.display = "flex";
  }
  function hideHoverItem(e) {
    let hoverItem = e.currentTarget.parentElement.querySelector(".hover-item");
    hoverItem.style.display = "none";
  }
  return (
    <div className="shopping-area">
      <Sneakers
        show={showHoverItem}
        hide={hideHoverItem}
        shoppingList={shoppingList}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
      <Sunglasses
        show={showHoverItem}
        hide={hideHoverItem}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
      <Watch
        show={showHoverItem}
        hide={hideHoverItem}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
      <Coffee
        show={showHoverItem}
        hide={hideHoverItem}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
      <Nintendo
        show={showHoverItem}
        hide={hideHoverItem}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
      <BodyOil
        show={showHoverItem}
        hide={hideHoverItem}
        handleTotalPrice={handleTotalPrice}
        increaseTotalOfItem={increaseTotalOfItem}
        decreaseTotalOfItem={decreaseTotalOfItem}
      />
    </div>
  );
}
export default ShoppingArea;
