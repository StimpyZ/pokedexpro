import React, { useEffect, useState } from 'react'
import PokemonStats from '../components/StatsBar'
import { getColorType, getTypeColor } from './services/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { getPokemonById, getPokemonDataAPI } from './services/getAllPokemons'

const PokeInfo = ({ pokemon }) => {
  const [weakness, setWeakness] = useState([])

  const getPokemonsWeakness = async (id) => {
    const data = await getPokemonById(id)
    const typesUrl = data.types.map((type) => type.type.url)
    const promise = typesUrl.map(async (typeUrl) => {
      const typeData = await getPokemonDataAPI(typeUrl)
      return typeData
    })
    const results = await Promise.all(promise)
    setWeakness(results)
  }

  useEffect(() => {
    getPokemonsWeakness(pokemon.id)
  }, [])

  return (
    <div className='poke-info'>
      <div className='poke-type-detail'>
        {pokemon.types.map((type) => {
          const typeColor = getTypeColor(type.type.name)
          return (
            <p
              className='pokemon-type'
              key={type.type.name}
              style={{ borderColor: typeColor, backgroundColor: typeColor }}
            >{type.type.name}
            </p>
          )
        })}

      </div>
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
      <div className='flex-weak'>
        {weakness.map((type, key) => {
          return (
            <div key={key} className='poke-type-detail1'>
              {type.damage_relations.double_damage_from.map((type) => {
                const typeColor = getTypeColor(type.name)
                return (
                  <p
                    className='pokemon-type2'
                    key={type.name}
                    style={{ borderColor: typeColor, backgroundColor: typeColor }}
                  >{type.name}
                  </p>
                )
              })}
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default PokeInfo
