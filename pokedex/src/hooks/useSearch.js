import usePokemon from './usePokemon'
import { pokemonFetchAPI } from '../components/services/getAllPokemons'
import { useState } from 'react'

const useSearch = () => {
  const { setPokemon } = usePokemon()
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [showError, setShowError] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const searchPokemon = async (pokemonName) => {
    if (!pokemonName) {
      setSearchResults([])
      return
    }
    setLoadingSearch(true)
    const pokemonData = await pokemonFetchAPI(pokemonName)
    if (!pokemonData) {
      setShowError(true)
      setSearchResults([])
    } else {
      setPokemon([pokemonData])
      setShowError(false)
      setSearchResults([pokemonData]) // actualizar estado de resultados de búsqueda
    }
    setLoadingSearch(false)
  }

  return { searchPokemon, showError, searchResults, loadingSearch }
}

export default useSearch
