import React from 'react'
import { useNavigate } from 'react-router-dom'
const Pokedex404 = () => {
  const navigate = useNavigate()

  const handleStart = () => {

    navigate(`/`)
  }

  const handleHome = () => {
    
    navigate(`/pokedex/1`)
  }

  return (
    <div className='error-id'>
      <h1 className='error-not-found'>Pokemon not found 😣</h1>
      <div className='error-return'>
      <h2 className='error-return-pokedex' onClick={handleHome}>Return to Pokedex</h2>
      <h2 className='error-return-home' onClick={handleStart}>Return Home</h2>
      </div>
    </div>
  )
}

export default Pokedex404