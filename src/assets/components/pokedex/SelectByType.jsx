import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({setTypeSelected}) => {

    const URL = 'https://pokeapi.co/api/v2/type'

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])
    
    const handleChange = e => {
    setTypeSelected(e.target.value) 
   
    }
  return (
    <div className='pokemon-selection'>
    <select className='pokemon-list' onChange={handleChange} >
        <option  value='All Pokemons'>All Pokemons</option>
        {
            types?.map(type => (
                <option className='pokemon-type' key={type.url} value={type.url}>{type.name}</option>
            ))
        }
       
    </select>
    </div>
  )
}

export default SelectByType