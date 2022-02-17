import React from "react";

import Country from "./Country";


const CountryList = ({countries, searchInput, option}) => {

    let countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );


  const africa = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const america = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const asia = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const europe = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
  const oceania = countries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))


if(option === 'Africa' && searchInput === '') {
    return (
        <div className="countries">
           {africa.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )
} else if(option === 'America' && searchInput === '') {
    return (
        <div className="countries">
           {america.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )
} else if(option === 'Asia' && searchInput === '') {
    return (
        <div className="countries">
           {asia.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )
} else if(option === 'Europe' && searchInput === '') {
    return (
        <div className="countries">
           {europe.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )


}else if(option === 'Oceania' && searchInput === '') {
    return (
        <div className="countries">
           {oceania.map(country => 
            <Country key = {country.name.official} country = {country}  />)} </div>
    )
}
 else {

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


}


export default CountryList