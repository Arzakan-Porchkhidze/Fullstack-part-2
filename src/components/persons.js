    import React from 'react'
    
const Persons = (props) => {
    return(
        <div>
          <ul>
           {props.filteredSearch.map(item => <li key={item.name}>{item.name} {item.number}</li>)}
          </ul>
        </div>
        
    )
}
    
export default Persons;