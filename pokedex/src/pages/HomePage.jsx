import React, { useEffect, useState } from 'react'
import Pokedex from '../components/Pokedex'
import {
  getPokemonDataAPI,
  getPokemonsData,
  pokemonFetchAPI
} from '../components/services/getAllPokemons'
import pokeNotFound from '../assets/pokeNotFound.png'
import SearchbarPokemon from '../components/SearchBar'
import Loading from '../components/Loading'
import FooterStimp from '../components/footer'

export const HomePage = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [noPokemon, setNoPokemon] = useState(false)
  const [showError, setShowError] = useState(false)

  const getPokemons = async () => {
    setLoading(true)
    const data = await getPokemonsData(21, 21 * page)
    const promise = data.results.map(async (pokemon) => {
      const pokemonData = await getPokemonDataAPI(pokemon.url)
      return pokemonData
    })
    const results = await Promise.all(promise)
    setPokemons(results)
    setLoading(false)
    setTotal(Math.ceil(data.count / 21))
    setShowError(false)
  }

  useEffect(() => {
    getPokemons()
  }, [page])

  const searchPokemon = async (pokemonName) => {
    if (!pokemonName) return getPokemons()
    setLoading(true)
    const pokemonData = await pokemonFetchAPI(pokemonName)
    if (!pokemonData) {
      setNoPokemon(true)
      setShowError(true)
    } else {
      setPokemons([pokemonData])
      setShowError(false)
    }
    setLoading(false)
    console.log(pokemonData)
  }
  return (
    <div className='App'>
      <SearchbarPokemon search={searchPokemon} />
      {noPokemon && showError
        ? (
          <div className='pokeNotFound'>
            <img
              src={pokeNotFound}
              className='imgError'
            />
          </div>
          )
        : loading
          ? <Loading />
          : (
            <Pokedex
              page={page}
              setPage={setPage}
              pokemon={pokemons}
              total={total}
            />
            )}
      <FooterStimp />
    </div>
  )
}
export default HomePage
