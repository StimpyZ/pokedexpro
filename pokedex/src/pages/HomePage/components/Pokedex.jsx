import '../../../components/css/pokedex.css'
import Pagination from '../../../components/Pagination'
import Pokemon from './Pokemon'

const Pokedex = ({ pokemon, page, setPage, total }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1)
    setPage(nextPage)
  }

  const finalPage = () => {
    setPage(total - 1)
  }

  const firstPage = () => {
    setPage(0)
  }
  return (
    <div className='pokedex-container'>
      <Pagination
        pages={page + 1}
        totalPages={total}
        left={lastPage}
        right={nextPage}
        leftLastPage={firstPage}
        rightLastPage={finalPage}
      />
      <div className='container-grid'>
        <div className='pokemon-container-grid'>
          {
          pokemon.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.name}
                pokemon={pokemon}
              />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Pokedex
