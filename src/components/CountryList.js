import React, {
    useState, useEffect
} from "react";

import Country from "./Country";

const CountryList = ({countries, searchInput}) => {

    console.log('z listy', searchInput)

    let countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );
  

    return (
        <div>
            {searchInput === '' ? <div className="countries">
           {countries.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div> : <div className="countries">
            {countriesToShow.map(country => 
             <Country country = {country} key = {country.name.official}  />)} </div>}
        </div>
        
    )
}


export default CountryList