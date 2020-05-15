import axios, {api_key} from './configs';

export async function getByCoords(lat,lon){
    return await axios.get(`?lat=${lat}&lon=${lon}&appid=${api_key}`)
};

export async function getByCityName(name) {
    return await axios.get(`?q=${name}&appid=${api_key}`)
}
