import React from 'react'

const AddName = (props) => {
    return (
        <div>
            <form onSubmit={props.addName}>
            <div>
                name: <input value={props.newName} onChange={props.handleChange}/>
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handleNumChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </div>
        
    )
}
export default AddName;