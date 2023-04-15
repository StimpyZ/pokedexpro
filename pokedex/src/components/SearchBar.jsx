import React, { useState } from 'react'
import './css/searchbarPoke.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchbarPokemon = ({ search }) => {
  const [pokemonSearch, setPokemonSearch] = useState('')

  const writePokemon = (e) => {
    setPokemonSearch(e.target.value)
    if (e.target.value.length === 0) search(null)
  }

  const searchPokemonData = async () => {
    search(pokemonSearch)
  }

  return (
    <div className='nav-container'>
      <header>
        <nav>
          <a className='nav' href='/'>
            <img src='/pokeball.svg' />Pokedex
          </a>
        </nav>
      </header>
      <div className='seacrh-input-container'>
        <input
          className='search-input'
          type='text'
          name='searchPokemon'
          onChange={writePokemon}
          placeholder='Search pokemon by name or id'
        />
        <button
          className='search-button'
          onClick={searchPokemonData}
        ><FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default SearchbarPokemon
