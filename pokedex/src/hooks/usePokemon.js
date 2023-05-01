import { useEffect, useState } from 'react'
import { getPokemonDataAPI, getPokemonsData } from '../components/services/getAllPokemons'
import { useLocation, useNavigate } from 'react-router-dom'

const usePokemon = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 0)

  const getPokemon = async () => {
    try {
      setLoading(true)
      const pokemonData = await getPokemonsData(21, 21 * page)
      const promise = pokemonData.results.map(async (pokemon) => {
        const data = await getPokemonDataAPI(pokemon.url)
        return data
      })
      const results = await Promise.all(promise)
      setPokemon(results)
      setTotal(Math.ceil(pokemonData.count / 21))
    } catch (error) {
      throw new Error('Error in getPokemon function')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    navigate(`?page=${page}`)
    getPokemon()
  }, [page, navigate])

  return { pokemon, loading, total, page, setPage, setLoading, getPokemon, setPokemon }
}

export default usePokemon
