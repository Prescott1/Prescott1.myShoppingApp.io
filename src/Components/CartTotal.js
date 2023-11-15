import React from "react";
import Card from "react-bootstrap/Card";

function CartTotal({ cartItems }) {
  // Function to calculate the total cost
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.modelCost, 0);
  };
  const totalCost = calculateTotal(cartItems);
  return (
    <Card className="my-3 card-container">
      <Card.Header>Cart</Card.Header>
    <div>
      <h3>Total Cost: ${totalCost.toLocaleString()}</h3>
    </div>
    </Card>
  );
}

export default CartTotal;
