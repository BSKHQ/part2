import axios from "axios";

const url = 'http://localhost:3001/persons'

const getAll = () => {
    return (
        axios
            .get(url)
            .then(response => response.data)
    )
}

const addPerson = (newPerson) => {
    return (
        axios
            .post(url, newPerson)
            .then(response => response.data)
    )
}

const deletePerson = (id) => {
    return (
        axios.delete(`${url}/${id}`)
    )
}

const replace = (person) => {
    return (
        getId(person).then(p => {
            return (
                axios
                    .put(`${url}/${p.id}`, { ...person, id: p.id })
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