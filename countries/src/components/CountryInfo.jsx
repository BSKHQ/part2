const CountryInfo = ({ data, filteredCountries, handleClick }) => {
    if (filteredCountries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    if (data) {
        return (
            <div>
                <h2>{data['name']['common']}</h2>
                <p>capital {data['capital']}</p>
                <p>area {data['area']}</p>

                <h3>languages:</h3>
                <ul>
                    {
                        Object
                            .values(data['languages'])
                            .map(lang => <li key={lang}>{lang}</li>)
                    }
                </ul>

                <img src={data['flags']['png']} />

                <h2>Weather in {data['capital']}</h2>
                <p>temperature {data['weatherdata']["main"]["temp"]} Celcius</p>
               
                <img src={`https://openweathermap.org/img/wn/${data['weatherdata']['weather']['0']['icon']}@2x.png`} />
                <p>wind {data['weatherdata']["wind"]["speed"]} m/s</p>
                
            </div>
        )
    } else {
        return (
            <>
                {filteredCountries.map(c => <div key={c}>{c}
                    <button
                        key={c}
                        data-key={c}
                        onClick={handleClick}>show
                    </button></div>)}
            </>
        )
    }
}

export default CountryInfo