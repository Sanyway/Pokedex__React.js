import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Pokemon404 from '../assets/components/pokedexId/Pokemon404'
import './styles/pokedexById.css'



const PokedexById = () => {

  const { id } = useParams()
  const initialId = useSelector(state => state.initialId)
  const navigate = useNavigate()
 
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [id])

  const ids = pokemon?.id

 

  const handlePrev = () => {
    navigate(`/pokedex/pages/pokemon/${ids - 1}`)
    
}

const handleHome = () => {

  navigate(`/pokedex/${initialId}`)
}

const handleNext = () => {

  navigate(`/pokedex/pages/pokemon/${ids + 1}`)
}

  if (hasError) {
    return <Pokemon404 />
  }
  return (
    <article className='pokeid-body'>
      <div className='pokeid-topline'></div>
<div className='pokeid-buttons'>
  <button onClick={handlePrev} className='pokeid-button-back'>Prev</button>
  <button onClick={handleHome} className='pokeid-button-home'>Back to Pokedex</button>
  <button onClick={handleNext} className='pokeid-button-next'>Next</button>
</div>
      <div className='pokeid-container'>
        <header className='pokeid-header'>
          <div className={`pokeid-background bg-${pokemon?.types[0].type.name}`}></div>
          <img className='pokeid-image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <h1 className='pokeid-id'># {pokemon?.id}</h1>

        </header>
        <section className='pokeid-qualities'>
          <h2 className='pokeid-name' >{pokemon?.name}</h2>
          <div className='pokeid-qualities-name'>
            <div className='pokeid-height'>
              <h2><span className='pokeid-span-height'>Height:</span> {pokemon?.height}</h2>
            </div>
            <div className='pokeid-weight'>
              <h2><span className='pokeid-span-weight'>Weight:</span> {pokemon?.weight}</h2>
            </div>
          </div>
        </section>
        <section className='pokeid-type-abilities'>
          <div className={`pokeid-type bg-${pokemon?.types[0].type.name}`}>
            <h1 className='pokeid-type-name'>Type</h1>
            <h2 className='pokeid-type-types'>{pokemon?.types[0].type.name}</h2>
          </div>

          <div className="pokeid-abilities-container">
            <h1 className='pokeid-abilities-title'>Abilities</h1>
            <div className='pokeid-abilities'>
            {
              pokemon?.abilities.map(ability => (
                <h2 key={ability.ability.name} className='pokeid-abilities-name'>{ability.ability.name}</h2>
              ))
            }
            </div>
          </div>
        </section>
        <section className='pokeid-stats'>
          <h1 className='pokeid-stats-title'>Stats:</h1>

          <div>
            {
              pokemon?.stats.map(stat => (
                
                <div key={stat.stat.name} className='progress-container'>
                  <h2 className='progress-name'>{stat.stat.name}:</h2>

                  <div className="progress-bar">
                    <div className={`progress `} style={{ width: `${stat.base_stat}%` }}> </div>
                    <h3>{stat.base_stat}%</h3>
                  </div>
                </div>


              ))
            }
          </div>

        </section>
      </div>
    </article>

  )
}


export default PokedexById