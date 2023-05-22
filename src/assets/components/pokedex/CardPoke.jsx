import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'
import gif from '../../../images/loader.gif'

const CardPoke = ({ url }) => {

  const [pokemon, setPokemon] = useState()
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setTimeout(() => {
          setPokemon(res.data);
        }, 2000); 
      })
      .catch(err => console.log(err));
  }, []);
const navigate = useNavigate()

   const handleClick = () => {
    navigate(`/pokedex/pages/pokemon/${pokemon.id}`)
   }
 
   if(pokemon){
  return (
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`card-poke-header bg-${pokemon?.types[0].type.name}`}>
        <img className='card-poke-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className={`card-poke-body letter-${pokemon?.types[0].type.name}`}>
        <h3 className="card-poke-name">{pokemon?.name}</h3>
        <ul className='card-poke-types-container' >
          {
            pokemon?.types.map(type => (
              <li key={type.slot} className='card-poke-type'>{type.type.name}</li>
            ))
          }

        </ul>
        <p className='card-poke-type-label'>Type</p>
        <ul className='card-poke-stats-container'>
{
  pokemon?.stats.map(stat => (
    <li key={stat.stat.name} className='card-poke-stat'>
      <span className='card-poke-stat-label' >{stat.stat.name}</span>
      <span className={`card-poke-stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
      </li>
  ))
}

        </ul>

      </section>
    </article>
  )
} else {
return (
  <article className='loader'>
  <img className='img-loader' src={gif} alt="Loader" />
  </article>
)
}
}

export default CardPoke