import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../../components/services/getAllPokemons'
import '../../components/css/pokemonPage.css'
import Loading from '../../components/Loading'
import PokeTop from '../PokePage/components/PokeTop'
import PokeInfo from './components/PokeInfo'

export const PokemonPage = () => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState([])

  const { id } = useParams()

  const getPokemon = async (id) => {
    setLoading(true)
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <main>
      {loading
        ? <Loading />
        : (
          <div className='pokemon-card-detailed'>
            <PokeTop pokemon={pokemon} />
            <PokeInfo pokemon={pokemon} />
          </div>
          )}
    </main>
  )
}
