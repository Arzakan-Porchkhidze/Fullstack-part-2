import React from 'react'

const Search = (props) => {

    return (
        <div>
            <h1>Search</h1>
            <input value={props.search} onChange={props.handleSearchChange}/>
        </div>
    )
}
export default Search;