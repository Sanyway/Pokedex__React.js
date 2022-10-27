import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../../store/slices/userName.slice'



const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [balloon, setBalloon] = useState(false)
  const initialId = useSelector(state => state.initialId)
  console.log(initialId)


  const submit = (e) => {
    if (e.target.pokedexinput.value) {
      e.preventDefault()
      dispatch(setUserNameGlobal(e.target.pokedexinput.value))
      navigate(`/pokedex/${1}`)
    } else {
      e.preventDefault()
      setBalloon(true)
    }
  }

  return (
    <form className='pokedex-form' onSubmit={submit} type='text'>
      <div class={`form-arrow-init ${balloon ? 'form-arrow-show' : 'form-arrow-hide'}`}>
        <p class="form-balloon-init">¡Please enter your name to begin!</p>
      </div>
      <input className='pokedex-input' placeholder='Enter your name here' type="text" id='pokedexinput' />
      <button className='pokedex-btn'>Catch them all!</button>

    </form>
  )
}

export default FormHome