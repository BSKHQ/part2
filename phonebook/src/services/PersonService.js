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
    const id = getId(person)
    axios
        .put(`${url}/${id}`, {...person, id:id})
        .then(response => console.log(response.data))
}

const getId = (person) => {
    return (
        getAll()
            .then(persons => persons.find(({ name }) => name === person.name))
            .id
    )
}

export default { getAll, addPerson, deletePerson, replace }