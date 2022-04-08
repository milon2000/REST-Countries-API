import React from "react"

const Country = ({country}) => {
    
    return (
        <div className="country-wrapper">
            <div className="country">
                <div className="country-flag-wrapper">
                    <img src={country.flags.png} alt={country.name.official} className="country-flag" />
                </div>
                <h3 className="country-name">{country.name.official}</h3>
                <p className="country-details"><span className="details-bold">Population: </span>{country.population}</p>
                <p className="country-details"><span className="details-bold">Region: </span>{country.region}</p>
                <p className="country-details"><span className="details-bold">Capital: </span>{country.capital}</p>
            </div>
        </div>
    )
}

export default Country

