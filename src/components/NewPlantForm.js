import React, { useState } from "react";

function NewPlantForm( { onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "", 
    image: "", 
    price: ""
  })

  function handleChange(event) {
    console.log(event.target.name)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  function handleSubmit(e) {
    e.preventDefault()
    
    fetch(" http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      "name": formData.name,
      "image": formData.image,
      "price": parseFloat(formData.price)
    })
  })
    .then((r) => r.json())
    .then((newPlant) => onAddPlant(newPlant))
  }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" value={formData.image} placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" value={formData.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
