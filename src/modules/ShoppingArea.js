import Sunglasses from "../img/sunglasses.jpg";
import Watch from "../img/watch.jpg";
import Sneakers from "../img/sneakers.jpg";
import Coffee from "../img/coffee-beans.jpg";
import Nintendo from "../img/nintendo-ds.jpg";
import BodyOil from "../img/body-oil.jpg";

function ShoppingArea() {
  return (
    <div className="shopping-area">
      <div className="product-container big">
        <img src={Sunglasses}></img>
        <div className="product-text-group">
          <h4>Sunglasses</h4>
          <p>$15.50</p>
          <p className="product-description">
            These are fantastic sunglasses. They will shade the world around
            your eyes as soon as you put them on. That's literally what they
            were made to do, and they do what they were made to do,
            unsurprisingly.
          </p>
        </div>
      </div>
      <div className="product-container big">
        <img src={Watch}></img>
        <div className="product-text-group">
          <h4>Watch</h4>
          <p>$30.25</p>
          <p className="product-description">
            This a great wrist watch. As you can see, it has a whole galaxy
            inside. It is not just a visual effect to look cool and impress
            other people, it is, indeed, an entire galaxy.
          </p>
        </div>
      </div>
      <div className="product-container big">
        <img src={Sneakers}></img>
        <div className="product-text-group">
          <h4>Sneakers</h4>
          <p>$20.10</p>
          <p className="product-description">
            These sneakers have been carefully manufactured to bring comfort to
            your malformed feet. They are cushy, cool looking, have a nice
            relaxed color, and they can actually float.
          </p>
        </div>
      </div>
      <div className="product-container big">
        <img src={Coffee} id="coffee"></img>
        <div className="product-text-group">
          <h4>Coffee Bag</h4>
          <p>$16.75</p>
          <p className="product-description">
            Carefully picked, carefully roasted, carefully destoned, carefully
            tasted, carefully packaged, carefully marketized and quickly
            described in this effortless product description.
          </p>
        </div>
      </div>
      <div className="product-container big">
        <img src={Nintendo}></img>
        <div className="product-text-group">
          <h4>Nintendo DS</h4>
          <p>$300</p>
          <p className="product-description">
            Great portable gaming station, fabricated by the illustrious
            Nintendo corporation, they do many things related to the gaming
            industry, mainly stopping you from growing up and becoming an adult.
          </p>
        </div>
      </div>
      <div className="product-container big">
        <img src={BodyOil}></img>
        <div className="product-text-group">
          <h4>Bath & Body Oil</h4>
          <p>$14</p>
          <p className="product-description">
            There are people that spend their entire lives studying and
            improving the technology and art of carefully crafting elegant
            fragrances so you don't stink.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ShoppingArea;
