import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleInCart() {
    setInCart((inCart) => !inCart)
  }
  const buttonClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"
  const buttonColor = inCart ? "remove" : "add"
  return (
    <li className={buttonClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleInCart} className={buttonColor}>{buttonText}</button>
    </li>
  );
}

export default Item;
