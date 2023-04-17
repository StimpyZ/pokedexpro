import React from 'react'
import PokemonStats from './StatsBar'
import { getColorType } from '../../../components/services/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import PokeTypeDetail from './PokeTypeDetail'
import PokeWeakness from './PokeWeakness'

const PokeInfo = ({ pokemon }) => {
  return (
    <div className='poke-info'>
      <PokeTypeDetail pokemon={pokemon} />
      <h2 style={getColorType(pokemon)}>ABOUT</h2>
      <div className='poke-weight-height-container'>
        <div className='poke-weight'>
          <FontAwesomeIcon icon={faWeight} />
          <p>WEIGHT</p>
          <p>{pokemon.weight / 10} kg</p>
        </div>
        <div className='poke-height'>
          <FontAwesomeIcon icon={faRulerVertical} />
          <p>HEIGHT</p>
          <p>{pokemon.height / 10} m</p>
        </div>
      </div>
      <h2 style={getColorType(pokemon)}>BASE STATS</h2>
      <PokemonStats stats={pokemon.stats} type={pokemon.types[0].type.name} />
      <h2 style={getColorType(pokemon)}>WEAKNESS</h2>
      <PokeWeakness pokemon={pokemon} />
    </div>
  )
}

export default PokeInfo
