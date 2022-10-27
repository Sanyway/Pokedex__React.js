import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CardPoke from '../assets/components/pokedex/CardPoke'
import InputSearch from '../assets/components/pokedex/inputSearch'
import Pagination from '../assets/components/pokedex/Pagination'
import SelectByType from '../assets/components/pokedex/SelectByType'
import { setInitialId } from '../../src/store/slices/initialId.slice'
import './styles/header.css'


const Pokedex = () => {

  const initialId = useSelector(state => state.initialId)
  const userName = useSelector(state => state.userName)
  const dispatch = useDispatch()


  const { id } = useParams()
  const [pokemons, setPokemons] = useState()
  const [allPokemons, setAllPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const [page, setPage] = useState(id)
  const navigate = useNavigate()

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)

        })
        .catch(err =>
          console.log(err))

    } else {

      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => {
          setPokemons(res.data.results)
          setAllPokemons(res.data.results)
        })
        .catch(err =>
          console.log(err))
    }

  }, [typeSelected])

  // Pages logic




  useEffect(() => {
    if (typeSelected == 'All Pokemons') {
      if (id == 1 && initialId > 1) {
        navigate(`/pokedex/${initialId}`)
        dispatch(setInitialId(id))
        setPage(id)

      } else {
        dispatch(setInitialId(id))
        setPage(id)
      }
    } else {
      if (typeSelected !== 'All Pokemons') {
        navigate(`/pokedex/${id}`)
        setPage(id)
      }
    }

  }, [id])




  console.log(page)
  console.log(initialId)
  console.log(id)


  const pokePerPage = 8
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage


  const pagesLength = pokemons && Math.ceil(pokemons?.length / pokePerPage)

 
  
  
    if (!(id >= 1) && !(id <= pagesLength) ) {
     return navigate('/error404')
    }
      return (
        <div>
          <header className='poke-header'>
            <h1 className='pokedex-title'>Pokedex</h1>
            <p className='pokedex-welcome'>Welcome <span className='welcome-span'>{userName}</span>, here you can find your favorite pokemon.</p>
          </header>
          <div>
            <InputSearch />
            <SelectByType
              setTypeSelected={setTypeSelected}
              setPage={setPage}
            />
            <Pagination
              page={page}
              pagesLength={pagesLength}
              setPage={setPage}
              allPokemons={allPokemons}

            />
          </div>
          <main>
            <div className="card-container">
              {
                pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                  <CardPoke
                    key={pokemon.url}
                    url={pokemon.url}
                  />

                ))
              }
            </div>
          </main>
          <Pagination
            page={page}
            pagesLength={pokemons && Math.ceil(pokemons?.length / pokePerPage)}
            setPage={setPage}
            allPokemons={allPokemons}
          />
        </div>
      )
    }
  


export default Pokedex