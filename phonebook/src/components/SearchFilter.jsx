const Filter = ({filterState, eventHandler}) =>{
    return(
        <div>filter shown with <input value={filterState} onChange={eventHandler} /></div>
    )
}

export default Filter