import React, { useState, useEffect  } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch(" http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <PlantList searchText={searchText} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
