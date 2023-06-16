import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart , setCart] = useState(false)
  
  function handleClick(){
    const changedInCart = !isInCart
    setCart(changedInCart)
  }
  const cartText = isInCart ? "Remove From Cart" : "Add to Cart"
  const liClass = isInCart ? "in-cart" : " "
  

  return (
    <li className= {liClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
