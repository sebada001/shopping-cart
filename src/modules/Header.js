import Cart from "../img/cart.png";
import Logo from "../img/logo.png";

function Header(props) {
  const { shoppingList, totalPrice } = props;
  function showCart() {
    let cart = document.querySelector(".shopping-cart");
    let itemsInCart = document.querySelector(".items-in-cart");
    let position = getElPosition(cart);
    itemsInCart.style.top = `${position.top + 35}px`;
    itemsInCart.style.left = `${position.left}px`;
    itemsInCart.style.display = "grid";
  }
  function hideCart() {
    let itemsInCart = document.querySelector(".items-in-cart");
    itemsInCart.style.display = "none";
  }
  function getElPosition(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }
  return (
    <header>
      <div className="left">
        <img src={Logo} alt="logo"></img>
        <div className="slogan">Shopping Experts</div>
      </div>
      <div className="right">
        <ul>
          <li>Shop</li>
          <li>About</li>
        </ul>
        <div
          className="shopping-cart"
          onMouseEnter={showCart}
          onMouseLeave={hideCart}
        >
          <img src={Cart} alt="icon of a cart"></img>
        </div>
        <div
          className="items-in-cart"
          data-testid="testing-cart"
          style={{ display: "none" }}
        >
          <div>
            <p className="top1">Item</p> <p className="top1">Price</p>{" "}
            <p className="top1">Amount</p>
          </div>
          {shoppingList
            .filter((item) => item.amount > 0)
            .map(({ name, price, amount }, index) => (
              <div key={index}>
                <p>{name}</p> <p>{price}</p> <p>{amount}</p>
              </div>
            ))}
          <div>
            <p>Total:</p>
            <p> </p>
            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
