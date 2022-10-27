import React from 'react'
import FormHome from '../assets/components/home/FormHome'
import './styles/home.css'

const Home = () => {

  
  return (
    <article className='pokedex'>
      <img className='pokedex-img' src="/images/home/pokedex.png" alt="" />
      <header className='pokedex-header'>
      <h2 className='pokedex-subtitle'>Hi Trainer!</h2>
      <p className="pokedex-text">Give me your name to see the pokedex</p>
      </header>

      <FormHome />
    </article>
  )
}

export default Home