function About() {
  return (
    <div id="about-container">
      <div id="about-area">
        <div className="title-about-area">
          <h4>
            Shopping Cart <span id="react-text"> React</span> Project
          </h4>
        </div>
        <div className="description-about-area">
          <p>
            Shopping Cart project created with React Framework, React Router.
            Changing number of items instantly updates the cart. Hover over cart
            at the top right of the screen to see the total. Click on it for
            check-out screen. No payment gateway API was installed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
