import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonServices from './services/PersonService'
import Notify from './components/Notify'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState([])

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
    const newPerson = { name: newName.trim(), number: newNumber.trim() }

    if (persons.find(
      ({ name }) =>
        name.toLowerCase() === newName.trim().toLowerCase())) {
      if (window.confirm(`${newName.trim()} is already added to the phonebook, replace the old number with a new one?`)) {
        PersonServices
          .replace(newPerson)
          .then(p => {
            setPersons(p)
            setNotification(['c', newPerson.name])
            setTimeout(()=>setNotification([]), 3000)
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }
    else {
      PersonServices
        .addPerson(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          setNotification(['a', person.name])
          setTimeout(()=>setNotification([]), 3000)
        })
        .catch(error => `${error} ${newPerson.name} could not be added at this time`)
      setNewName('')
      setNewNumber('')
    }
  }


  const deleteHandler = (event) => {
    const confirmDel = window.confirm(`Delete ${event.target.dataset.name}?`)
    if (confirmDel) {
      PersonServices.deletePerson(event.target.dataset.key)
      setPersons(persons.filter((person) => person.name != event.target.dataset.name))
      setNotification(['d', event.target.dataset.name])
      setTimeout(()=>setNotification([]), 3000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notify code={notification[0]} name={notification[1]} />
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