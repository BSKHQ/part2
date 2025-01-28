import Person from './Person'
const Persons = ({ persons, newFilter }) => {
    const handleDelete = (event, name) =>{
        return(
            ()=> {
                window.confirm(`Delete ${event} ?`)
            }
        )
    }
    return (
        <ul>
            {
                ((newFilter)
                    ? (persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))
                    : persons
                ).map(person => <Person key={person.name} person={person} deletePerson={handleDelete(person.name)}/>)
            }
        </ul>
    )
}

export default Persons