import Pokedex from './components/Pokedex'
import pokeNotFound from '../../assets/pokeNotFound.png'
import SearchbarPokemon from './components/SearchBar'
import Loading from '../../components/Loading'
import FooterStimp from '../../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import usePokemon from '../../hooks/usePokemon'
import useSearch from '../../hooks/useSearch'

export const HomePage = () => {
  console.log('render')
  const { loading, page, pokemon, setPage, total } = usePokemon()
  const { searchPokemon, showError, searchResults, loadingSearch } = useSearch()

  return (
    <div className='App'>
      <SearchbarPokemon search={searchPokemon} />
      {showError
        ? (
          <div className='pokeNotFound'>
            <img
              src={pokeNotFound}
              className='imgError'
            />
          </div>
          )
        : loading && loadingSearch
          ? <Loading />
          : (
            <Pokedex
              page={page}
              setPage={setPage}
              pokemon={searchResults.length > 0 ? searchResults : pokemon}
              total={total}
            />
            )}
      <button className='goUp' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <FooterStimp />
    </div>
  )
}
export default HomePage
