const Person =({person, deletePerson})=>{
    
    return (
        <li key={person.name}>{person.name} {person.number} 
        <button key={person.id} onClick={deletePerson}>delete</button></li>
    )
}



export default Person