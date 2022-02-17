import React, {useState, useEffect} from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [option, setOption] = useState('')


  useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
          setCountries(res.data)
      })
  }, [])

  const handleSearchChange =(event) => {
    setSearchInput(event.target.value)
}
  const handleValueChange = (event) => {
  setOption(event.target.value)
}
 
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">Where in the world</h1>
          <div className="switcher">
            <p className="switcher-txt">Dark Mode</p>
          </div>
        </div>
        <div className="search-fields">
       <div className="search-input">
        <input type="text"
            value={searchInput}
            onChange = {handleSearchChange} />
        </div>
        <div className="select">
        <select onChange={handleValueChange}>
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        </div>
        </div>
      <CountryList countries={countries} searchInput = {searchInput}   option ={option}/>
      </div>
    </div>
  );
}

export default App;
