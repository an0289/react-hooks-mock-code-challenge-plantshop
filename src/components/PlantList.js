import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, setPlants, searchText }) {


const plantsToDisplay = plants.filter((plant) => {
  if(searchText === "") return true;
return plant.name.toLowerCase().includes(searchText.toLowerCase())
})

function handleDeletePlant(id) {
  const updatedPlants = plants.filter((plant) => plant.id !== id)
  setPlants(updatedPlants)
}


  return (
    <ul className="cards">{plantsToDisplay.map((plant) => (
      <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} 
      onDeletePlant={handleDeletePlant}/>
    ))}</ul>
  );
}

export default PlantList;
