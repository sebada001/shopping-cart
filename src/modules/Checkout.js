function Checkout(props) {
  const { shoppingList, totalPrice } = props;
  return (
    <div id="checkout-container">
      <table id="table-container">
        <thead id="table-head">
          <tr>
            <td>Item</td>
            <td>Amount</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody id="table-body">
          {shoppingList
            .filter((item) => item.amount > 0)
            .map(({ name, price, amount }, index) => (
              <tr key={index + 6}>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{price}</td>
              </tr>
            ))}
        </tbody>
        <tfoot id="table-foot">
          <tr>
            <td></td>
            <td>Total:</td>
            <td className="total-checkout">${totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Checkout;
