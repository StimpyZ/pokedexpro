import '../../components/css/pokemonPage.css'
import Loading from '../../components/Loading'
import PokeTop from '../PokePage/components/PokeTop'
import PokeInfo from './components/PokeInfo'
import usePokeId from '../../hooks/usePokeID'

export const PokemonPage = () => {
  const { loading, pokemon } = usePokeId()

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
