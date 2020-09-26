import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import CountriesList from './components/CountriesList'
const App = () => {
  const [allCountries,setAllCountries] = useState([])
  const [search,setSearch] = useState('')
  const [filteredCountries,setFilteredCointries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  useEffect(()=> {
    setFilteredCointries(allCountries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())))
  },[search,allCountries])

  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleManymatches = filteredCountries.length > 10 && search ? <p>too many matches, specify another filter</p> : null;


  return (
    <div>
        <Find search={search} handleSearch={handleSearch}/>
        {handleManymatches}
        {search === '' || filteredCountries.length > 10 ? null : <CountriesList countries={filteredCountries} />}
        
    </div>
  )
}

export default App