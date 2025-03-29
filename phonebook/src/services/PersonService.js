import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return (
        axios
            .get(baseUrl)
            .then(response => response.data)
    )
}

const addPerson = (newPerson) => {
    return (
        axios
            .post(baseUrl, newPerson)
            .then(response => response.data)
    )
}

const deletePerson = (id) => {
    return (
        axios.delete(`${baseUrl}/${id}`)
    )
}

const replace = (person) => {
    return (
        getId(person).then(p => {
            return (
                axios
                    .put(`${baseUrl}/${p.id}`, { ...person, id: p.id })
                    .then(r => {
                        return (getAll())
                    }
                    )
            )

        })
    )


}

const getId = (person) => {
    return (
        getAll().then(persons => {
            const p = persons.find(({ name }) => name.toLowerCase() === person.name.toLowerCase())
            return p
        })
    )
}

export default { getAll, addPerson, deletePerson, replace }