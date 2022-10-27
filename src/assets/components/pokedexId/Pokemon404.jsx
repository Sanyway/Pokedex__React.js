import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Pokemon404 = () => {
  const initialId = useSelector(state => state.initialId)
  const navigate = useNavigate()

  const handleStart = () => {

    navigate(`/`)
  }

  const handleHome = () => {

    navigate(`/pokedex/${initialId}`)
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

export default Pokemon404