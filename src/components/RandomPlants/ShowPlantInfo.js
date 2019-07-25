import React, {useState} from 'react'
import PlantApiService from '../../services/plant-api-service'
import './ShowPlantInfo.css'

export default function ShowPlantInfo (props){
    const [show, setShow]=useState(false)
    const [info, setInfo] = useState(null)
    const handleClick= ev =>{
        ev.preventDefault()
        PlantApiService.getPlant(props.id)
        .then(res => {
            setInfo(res)
            setShow(true)
        })
    }
    const renderDisplay = () => {
        if (show){
            let divStyle
            try{
                divStyle=`url(${info.images[0].url})`
            }
            catch{
                divStyle=`url(https://res.cloudinary.com/dxjjosi5g/image/upload/v1564085395/no-image-found_vcnvkf.jpg)`
            }
            
            
            return (
                <div className="Plant-Spec-Info">
                    <h2>
                        {info.scientific_name}
                    </h2>
                    <span>Native Status:{' '}{info.native_status || 'N/A'}</span><br />
                    <span>Genus: {info.genus.name || 'N/A'}</span>
                    <div style={ { backgroundImage:divStyle }} className="Plant-Photo">
                    </div>
                    <a href={info.main_species.sources[0].source_url}>Want more information on this plant?</a>
                </div>
            )
        }
        else{
            return (
                <div className="Plant-Spec-Info" onClick={handleClick}>
                    <h2>
                        {props.scientific_name}
                    </h2>
                    <div className="Common-Name">
                        <span>
                            Common Name: {props.common_name || "N/A"}
                        </span>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {renderDisplay()}
        </>
    )
}