import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const InputSearch = () => {

  const navigate = useNavigate()
  const [balloon, setBalloon] = useState(false)
  const submit = e => {
    if (e.target.search.value.trim().toLowerCase()) {
      e.preventDefault()
      navigate(`/pokedex/pages/pokemon/${e.target.search.value.trim().toLowerCase()}`)
      console.log(e.target.value)
    } else {
      e.preventDefault()
      setBalloon(true)
    }


  }
  return (
    <div className='form-container'>
      <div class={`form-arrow ${balloon ? 'form-arrow-show' : 'form-arrow-hide'}`}>
        <p class="form-balloon">Enter a name or a number!</p>
      </div>
      <form className='pokemon-form' onSubmit={submit}>
        <input className='pokemon-input-form' type="text" placeholder='Search a pokemon...' id='search' />
        <button className='pokemon-button-form'>Search</button>

      </form >
    </div>
  )
}

export default InputSearch