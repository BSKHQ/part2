import { useState, useEffect } from 'react'
import CountryInfo from './components/CountryInfo.jsx'
import countryservices from './services/countryservices.js'
import Notification from './components/Notification.jsx'


const App = () => {

  const [value, setValue] = useState('') //what's typed in the form
  const [country, setCountry] = useState(null) //info to get from server
  const [countries, setCountries] = useState([]) //
  const [filtered, setFiltered] = useState([]) //countries to display while typing
  const [countryData, setCountryData] = useState(null)
  const [errorMsg, setErrorMsg] = useState()

  function handleInputChange(event) {
    setValue(event.target.value)

    if (event.target.value.length > 0) {
      const filteredcountries = countries
        .filter(c => c.toLowerCase().includes(event.target.value.toLowerCase()))
      setFiltered(filteredcountries)
    } else {
      setFiltered([])
    }


    if (filtered.length == 1) {
      setCountry(filtered[0])
    } else {
      setCountry(null)
    }
  }

  useEffect(() => {
    if (countries.length == 0) { //runs once only
      countryservices
        .getCountries()
        .then(data => {
          setCountries(data.map(obj => obj['name']['common']))
        })
        .catch(error => {
          setErrorMsg('could not get countries: NETWORK ERROR')
          setTimeout(setErrorMsg(null), 4000)
        })
    }

    if (country) {
      countryservices
        .getCountry(country)
        .then(data => {
          setCountryData(data)
        })
        .catch(error => {
          setErrorMsg('could not get country data: NETWORK ERROR')
          setTimeout(setErrorMsg(null), 4000)
        })
    } else {
      setCountryData(null)
    }

  }, [country])


  return (
    <div>
      <form onSubmit={(event) => event.target.preventDefault()}>
        find countries <input value={value} onChange={handleInputChange} />
      </form>
      <CountryInfo data={countryData} filteredCountries={filtered} />
      <Notification message={errorMsg} />
    </div>
  )
}


export default App
