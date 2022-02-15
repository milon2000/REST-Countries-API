import React from "react"

const Country = ({country, flag, name, population, region, capitol, countriesToShow}) => {
    console.log('halo', country)
    return (
        <div className="country">
            <img src={country.flags.png} alt={country.name.official} className="country-flag" />
            <h3 className="country-name">{country.name.official}</h3>
            <p className="country-details">Population:{country.population}</p>
            <p className="country-details">Region:{country.region}</p>
            <p className="country-details">Capitol:{country.capitol}</p>
        </div>
    )
}

export default Country

