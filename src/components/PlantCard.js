import React, { useState } from "react";

function PlantCard({ image, price, name, id, onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true)

  function handleInStockClick() {
    setIsInStock((isInStock) => !isInStock)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => onDeletePlant(id))
  }

  return (
    <li className="card">
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleInStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
    </li>
  );
}

export default PlantCard;
