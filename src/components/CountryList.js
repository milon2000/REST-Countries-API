import React, {
    useState, useEffect
} from "react";

import Country from "./Country";

const CountryList = ({countries, searchInput}) => {

    return (
        <div>
        <div className="countries">
           {countries.map(country => 
            <Country key = {country.name.official}  flag = {country.flags.png} name = {country.name.official} population= {country.population} region= {country.region} capitol= {country.capitol}/>)}
       </div>
        </div>
        
    )
}

export default CountryList