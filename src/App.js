import React, { useState, useEffect } from 'react'
import AddName from './components/AddName'
import Persons from './components/persons'
import Search from './components/Search'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const handleChange = (e) =>{
        setNewName(e.target.value) 
    }
  const handleNumChange = (e) =>{
    setNewNumber(e.target.value) 
    }
  const addName = (e) =>{
        e.preventDefault()
        const newperson = {
            name: newName,
            number: newNumber
        }
        if(persons.some(item => item.name === newperson.name)){
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat(newperson))
        setNewName('')
        setNewNumber('')
  }
  const filteredSearch = persons.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
        <Search search={search} handleSearchChange={handleSearchChange}/>
      <h2>Phonebook</h2>
        <AddName addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleNumChange={handleNumChange}/>
      <h2>Numbers</h2>
        <Persons filteredSearch={filteredSearch}/>
    </div>
  )
}

export default App