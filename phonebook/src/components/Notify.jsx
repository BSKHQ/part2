const Notify = ({ code, name }) => {
    const NotifyStyle={
        color: 'green',
        padding: 10,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        marginBottom: 10
    }

    const errorStyle= {...NotifyStyle, color:'red'}

    switch (code) {
        case 'a':
            return <div style={NotifyStyle}>Added {name}</div>
        case 'c':
            return <div style={NotifyStyle}>Changed phone number for {name}</div>
        case 'd':
            return <div style={NotifyStyle}>Deleted {name}</div>
        case 'e':
            return <div style={errorStyle}>Information of {name} has already been removed from the server</div>
    }

}

export default Notify