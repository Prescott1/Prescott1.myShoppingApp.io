import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function Cart({ cartItems }) {
  return (
    <Card className="my-3 card-container">
      <Card.Header>Cart</Card.Header>
      <ListGroup variant="flush">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <Card.Img
                src={item.imageLocation}
                alt={item.alternativeText}
                style={{ width: "50px" }}
              />
              <span className="mx-2">{item.itemName}</span>
              <span>${item.modelCost.toLocaleString()}</span>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>Your cart is empty.</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
}

export default Cart;
