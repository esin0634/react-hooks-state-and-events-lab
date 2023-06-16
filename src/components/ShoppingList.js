import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [itemList , setItemList] = useState(items)
  

  function handleChange(e){
    console.log(e.target.value)
    const newCategory = e.target.value
    const newList = items.filter((item)=> item.category === newCategory )
    setItemList(newList)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
