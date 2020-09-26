import React from 'react'

const CountriesList = ({countries}) => {

    return (
        <div>
            {countries.length ===1 ?
        <div>
            <h1>{countries.map(item => item.name)}</h1>
            <p>Capital {countries.map(item => item.capital)}</p>
            <p>Popultion {countries.map(item => item.population)}</p>
            <h1>languages</h1>
            <ul>
                {countries.map((country) => country.languages.map((item,i) => <li key={i}>{item.name}</li>))}
            </ul>
            <img style={{width: '200px', height: 'auto'}} src={countries.map(country => country.flag)} alt = 'flag'/>
        </div> : <div>{countries.map(country => <p key={country.numericCode}>{country.name}</p>)}</div>}
        </div>
        
    )
}
export default CountriesList;