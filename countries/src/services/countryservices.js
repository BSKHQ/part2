import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

function getCountries() {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

function getCountry(country) {
    const request = axios.get(`${baseUrl}/name/${country}`)
    return request.then(response => response.data)
}

export default { getCountries, getCountry }