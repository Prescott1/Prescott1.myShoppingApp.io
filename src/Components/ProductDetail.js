// import React from "react";
// import Button from 'react-bootstrap/Button';

//  function ProductDetail({ productModel, onAddToCart }) {
//   return (

//     <div>
//       {productModel.map((product, index) => (
//         <div key={index} style={{ width: `${product.imageSize}%` }}>
//           <img src={product.imageLocation} alt={product.alternativeText} />
//           <h2>{product.itemName}</h2>
//           <p>Cost: ${product.modelCost.toLocaleString()}</p>
//           <Button onClick={() => onAddToCart(product)} variant="primary">Add to Cart</Button>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default ProductDetail;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ProductDetail({ productModel, onAddToCart }) {
  return (
    <div className="d-flex flex-wrap justify-content-center card-container">
      {productModel.map((product, index) => (
        <Card key={index} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={product.imageLocation}
            alt={product.alternativeText}
          />
          <Card.Body>
            <Card.Title>{product.itemName}</Card.Title>
            <Card.Text>Cost: ${product.modelCost.toLocaleString()}</Card.Text>
            <Button variant="primary" onClick={() => onAddToCart(product)}>
              Add to Cart
            </Button>
          </Card.Body>
          <ListGroup variant="flush">
            {/* Example of adding specifications or additional details */}
            {product.specifications &&
              product.specifications.map((spec, idx) => (
                <ListGroup.Item key={idx}>{spec}</ListGroup.Item>
              ))}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default ProductDetail;
