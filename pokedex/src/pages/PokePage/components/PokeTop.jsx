import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import imgBackground from '../../../assets/pokeball-fondo-detail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getImgBackground } from '../../../components/services/types'

const PokeTop = ({ pokemon }) => {
  return (
    <div className='poke-top-container' style={getImgBackground(pokemon)}>
      <div className='top-info'>
        <div className='name-back'>
          <Link className='back' to='HomePage'>
            <FontAwesomeIcon
              icon={faArrowLeft}
            />
          </Link>
          <h1>
            {pokemon.name.toUpperCase()}
          </h1>
        </div>
        <p id='poke-id'>#{pokemon.id.toString().padStart(3, '0')}</p>
      </div>
      <div className='container-img'>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className='poke-img-detail'
        />
      </div>
      <div className='container-img-detail'>
        <img
          src={imgBackground}
          alt='pokeball-fondo-detail'
          className='pokeball-bg-detail'
        />
      </div>
    </div>
  )
}

export default PokeTop
