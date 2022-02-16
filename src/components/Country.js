import React from "react"

const Country = ({country}) => {
    
    return (
        <div className="country">
            <img src={country.flags.png} alt={country.name.official} className="country-flag" />
            <h3 className="country-name">{country.name.official}</h3>
            <p className="country-details">Population: {country.population}</p>
            <p className="country-details">Region: {country.region}</p>
            <p className="country-details">Capital: {country.capital}</p>
        </div>
    )
}

export default Country

