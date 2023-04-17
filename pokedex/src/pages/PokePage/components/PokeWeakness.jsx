import React, { useEffect, useState } from 'react'
import { getTypeColor } from '../../../components/services/types'
import { getPokemonById, getPokemonDataAPI } from '../../../components/services/getAllPokemons'

const PokeWeakness = ({ pokemon }) => {
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
  )
}

export default PokeWeakness
