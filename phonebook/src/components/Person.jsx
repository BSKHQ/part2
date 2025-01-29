const Person = ({ person, deletePerson }) => {

    return (
        <li key={person.name}>{person.name} {person.number}
            <button key={person.id}
                data-key={person.id}
                data-name={person.name}
                onClick={deletePerson}>delete</button></li>
    )
}



export default Person