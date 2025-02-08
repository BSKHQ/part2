import axios from 'axios'
const api_key = import.meta.env.VITE_WEATHER
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const geoAPI = 'http://api.openweathermap.org/geo/1.0/direct?'
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?'

function getCountries() {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

function getCountry(country) {
    const request = axios.get(`${baseUrl}/name/${country}`)
    return request.then(response => response.data)
}

function getWeather(city) {
    const geoRequest = axios.get(`${geoAPI}q=${city}&appid=${api_key}`)
    return (geoRequest.then(response => {
        const lat = response.data[0]["lat"]
        const lon = response.data[0]["lon"]
        const weatherRequest = axios.get(`${weatherAPI}lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
        return weatherRequest.then(response => response.data)
    }
    ))
}

export default { getCountries, getCountry, getWeather }