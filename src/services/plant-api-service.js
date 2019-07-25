import config from '../config'
import TokenService from '../services/token-service'

const PlantApiService = {
    getPlants(name){
        console.log(name,config.API_ENDPOINT)
        return fetch(`${config.API_ENDPOINT}/plants/${name}`,{
            method:'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>{
            return res.json()
        }
        )
    },
    getPlant(id){
        return fetch(`${config.API_ENDPOINT}/plants/id/${id}`, {
            method:'GET',
            headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return res.json()
        })
    }
}
export default PlantApiService