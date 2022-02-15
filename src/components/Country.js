import React from "react"


const Country = ({flag, name, population, region, capitol, countriesToShow}) => {
    return (
        <div className="country">
            <p>{countriesToShow}</p>
            <img src={flag} alt={name} className="country-flag" />
            <h3 className="country-name">{name}</h3>
            <p className="country-details">Population:{population}</p>
            <p className="country-details">Region:{region}</p>
            <p className="country-details">Capitol:{capitol}</p>
        </div>
    )
}

export default Country

