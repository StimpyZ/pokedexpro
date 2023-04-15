import React from 'react'
import './css/pokemon.css'
import { Link } from 'react-router-dom'
import { typeColors } from './services/types'

const Pokemon = ({ pokemon }) => {
  const getTypeColor = (type) => {
    return Object.hasOwnProperty.call(typeColors, type) ? typeColors[type] : typeColors.default
  }

  const getImgBackground = () => {
    const typeColor = getTypeColor(pokemon.types[0].type.name)
    return { backgroundColor: typeColor }
  }

  return (
    <Link to={`/pokemon/${pokemon.id}`} className='pokemon-card-container'>
      <div className='pokemon-card'>
        <div className='pokemon-card-img' style={getImgBackground()}>
          <img
            className='img-poke'
            src={pokemon.sprites.other['official-artwork'].front_default}
          />
        </div>
        <div className='pokemon-card-info'>
          <p className='poke-id'>#{pokemon.id}</p>
          <div className='poke-name'>
            <h3>{pokemon.name}</h3>
          </div>
          <div className='poke-type'>
            {pokemon.types.map((type) => {
              const typeColor = getTypeColor(type.type.name)
              return (
                <p
                  className='type'
                  key={type.type.name}
                  style={{ borderColor: typeColor, backgroundColor: typeColor }}
                >{type.type.name}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Pokemon
