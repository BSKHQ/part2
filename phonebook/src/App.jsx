import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonServices from './services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    PersonServices
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }

    if (persons.find(
      ({ name }) =>
        name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      PersonServices
        .addPerson(newPerson)
        .then(setPersons(persons.concat(newPerson)))
        .catch(error => `${newPerson} could not be added at this time`)
      setNewName('')
      setNewNumber('')
    }
  }
  const deleteHandler = (event) => {
    const confirmDel = window.confirm(`Delete ${event.target.dataset.name}?`)
    if (confirmDel) {
      PersonServices
        .deletePerson(event.target.dataset.key)
        .then()
        
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterState={newFilter} eventHandler={handleNewFilter} />

      <h2>Add a new</h2>
      <PersonForm submitHandler={handleSubmit} name={newName} newNameHandler={handleNewName}
        number={newNumber} newNumberHandler={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} handleDelete={deleteHandler} />
    </div>
  )
}

export default App