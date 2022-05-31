import Cart from "../img/cart.png";
import Logo from "../img/logo.png";
import { useState } from "react";

function Header() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
        <img src={Logo}></img>
        <div className="slogan">Shopping Experts</div>
      </div>
      <div className="right">
        <ul>
          <li>Shop</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <div
          className="shopping-cart"
          onMouseEnter={showCart}
          onMouseLeave={hideCart}
        >
          <img src={Cart} alt="cart-image"></img>
        </div>
        <div
          className="items-in-cart"
          data-testid="testing-cart"
          style={{ display: "none" }}
        >
          <p className="top1">Item</p> <p className="top1">Price</p>{" "}
          <p className="top1">Amount</p>
          <p>Total:</p> <p></p> <p>${totalPrice}</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
