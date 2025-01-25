import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNewInput = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }

    if (persons.find(
                ({name}) => 
                  name===newName))
    {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          person => <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App