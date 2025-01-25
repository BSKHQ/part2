const PersonForm = (props) => {
    const {submitHandler, name, newNameHandler, number, newNumberHandler} = props
    return (
        <form onSubmit={submitHandler}>
        <div>
          name: <input value={name} onChange={newNameHandler} />
        </div>
        <div>
          number: <input value={number} onChange={newNumberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
    
}

export default PersonForm