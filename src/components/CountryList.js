import React, {
    useState, useEffect
} from "react";

import Country from "./Country";

const CountryList = ({countries, searchInput}) => {

    const [option, setOption] = useState('');



    let countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleValueChange = (event) => {
    setOption(event.target.value)
  }

  const africa = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const america = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const asia = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const europe = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const oceania = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  
console.log('afryka jest tu', africa)
console.log('europa jest tu', europe)

if(option === 'Africa') {
    return (
        <div className="countries">
           {africa.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )
}
    return (
        <div>
            <div><select onChange={handleValueChange}>
                <option value="All">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select></div>
        {searchInput === '' ? <div className="countries">
           {countries.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div> : <div className="countries">
            {countriesToShow.map(country => 
             <Country country = {country} key = {country.name.official}  />)} </div>}
        </div>
        
    )
}


export default CountryList