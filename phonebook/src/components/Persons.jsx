import Person from './Person'
const Persons = ({ persons, newFilter, handleDelete }) => {
    return (
        <ul>
            {
                ((newFilter)
                    ? (persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))
                    : persons
                ).map(person => <Person key={person.name} person={person} deletePerson={handleDelete}/>)
            }
        </ul>
    )
}

export default Persons