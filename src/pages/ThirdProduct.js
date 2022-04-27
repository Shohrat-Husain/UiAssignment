import React from "react";
import { Button } from "react-bootstrap";
function ThirdProduct(props) {
  return (
    <div>
      <div className="firstProduct-container">
        <div>
          <img
            src="https://sc04.alicdn.com/kf/Hdc618b7bd67c409c8850e7c12feada3dm.jpg"
            alt="Querty watch"
            style={{ height: "200px", width: "200px" }}
          ></img>
          <div className="quantityButton">
            <Button variant="secondary">+</Button>
            <h5>1</h5>
            <Button variant="secondary">-</Button>
          </div>
        </div>
        <div className="productName">
          <h2>{props.name}</h2>
          <h4>{props.type}</h4>
          <h3>{props.rate}</h3>
          <p>
            <b>Color:</b> Gold
          </p>
          <p style={{ color: "green" }}>in stock</p>

          <div className="dlt-btnContainer">
            <Button variant="outline-warning" style={{ borderRadius: "15px" }}>
              Delete
            </Button>
            <br />
            <Button variant="warning" style={{ borderRadius: "15px" }}>
              See more like this
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdProduct;
