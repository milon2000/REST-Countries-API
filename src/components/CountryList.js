import React, {
    useState, useEffect
} from "react";

import Country from "./Country";

const CountryList = ({countries, searchInput}) => {

    console.log('z listy', searchInput)

    let countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );
  let countriesToShow2 = countriesToShow.map(country => console.log(country.name.common))

  console.log(countriesToShow2)

    return (
        <div>
            {searchInput === '' ? <div className="countries">
           {countries.map(country => 
            <Country key = {country.name.official}  flag = {country.flags.png} name = {country.name.official} population= {country.population} region= {country.region} capitol= {country.capitol}/>)} </div> : <div className="countries">
            {countriesToShow.map(country => 
             <Country key = {country.name.official}  flag = {country.flags.png} name = {country.name.official} population= {country.population} region= {country.region} capitol= {country.capitol}/>)} </div>}
        </div>
        
    )
}


export default CountryList