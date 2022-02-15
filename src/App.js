import React, {useState, useEffect} from "react";
import axios from "axios";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange =(event) => {
      setSearchInput(event.target.value)
      console.log(event.target.value)
  }

  useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
          setCountries(res.data)
      })
  }, [])
  return (
    <div className="App">
       <div>
        <input type="text"
            value={searchInput}
            onChange = {handleSearchChange} />
        </div>
      <CountryList countries={countries} searchInput = {searchInput}/>
    </div>
  );
}

export default App;
