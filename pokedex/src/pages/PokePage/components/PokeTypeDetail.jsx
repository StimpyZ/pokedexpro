import React from 'react'
import { getTypeColor } from '../../../components/services/types'

const PokeTypeDetail = ({ pokemon }) => {
  return (
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
  )
}

export default PokeTypeDetail
