import React, {useState, useRef, useContext} from 'react'
import PlantApiService from '../../services/plant-api-service'
import ShowPlantInfo from './ShowPlantInfo'
import UserContext from '../../contexts/UserContext'
import './RandomPlant.css'

export default function RandomPlants(){
    const userContext = useContext(UserContext)
    const [showPlants, setShowPlants] = useState(false)
    const userInput = useRef()
    const handleSubmit= ev =>{
        ev.preventDefault()
        PlantApiService.getPlants(userInput.current.value)
        .then(res => {
            userContext.setPlants(res)
            setShowPlants(true)
        })
    }
    function renderPlants () {
        try {
            return userContext.plants.map((plant,idx) =>{
                return (
                    <ShowPlantInfo 
                        key={idx}
                        scientific_name={plant.scientific_name}
                        common_name={plant.common_name}
                        id={plant.id}
                    />
                )
            })
        }
        catch{
            return "Can't find plants with the given input"
        }
    }
    return(
        <>
        <div className="GetPlants-Container">
            <form onSubmit={handleSubmit} id="Plant-Input-Form">
                <h2>Enter The Plant Name to Search</h2>
                <input 
                    type="text"
                    className="GetPlants-Input" 
                    ref={userInput}
                    placeholder="Enter a common or scientific plant name to Search"
                />
                <button type="submit" className="Submit-Btn">
                    Submit
                </button>
            </form>
        </div>
        <div className="Result-Container">
            {showPlants? <>{renderPlants()}</>:<></>}
        </div>
        </>
    )
}