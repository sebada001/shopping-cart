import Sunglasses from "./shopping-items/Sunglasses";
import Watch from "./shopping-items/Watch";
import Sneakers from "./shopping-items/Sneakers";
import Coffee from "./shopping-items/Coffee";
import Nintendo from "./shopping-items/Nintendo";
import BodyOil from "./shopping-items/BodyOil";

function ShoppingArea() {
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
      <Sneakers show={showHoverItem} hide={hideHoverItem} />
      <Sunglasses show={showHoverItem} hide={hideHoverItem} />
      <Watch show={showHoverItem} hide={hideHoverItem} />
      <Coffee show={showHoverItem} hide={hideHoverItem} />
      <Nintendo show={showHoverItem} hide={hideHoverItem} />
      <BodyOil show={showHoverItem} hide={hideHoverItem} />
    </div>
  );
}
export default ShoppingArea;
