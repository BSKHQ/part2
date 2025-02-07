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
            </div>
        )
    } else {
        return (
            <>
                {filteredCountries.map(c => <div>{c}
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