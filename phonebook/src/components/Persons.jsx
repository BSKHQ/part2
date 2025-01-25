import Person from './Person'
const Persons = ({ persons, newFilter }) => {
    return (
        <ul>
            {
                ((newFilter)
                    ? (persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))
                    : persons
                ).map(person => <Person key={person.name} person={person} />)
            }
        </ul>
    )
}

export default Persons