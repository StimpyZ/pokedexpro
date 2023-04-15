import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonById, getPokemonDataAPI } from '../components/services/getAllPokemons'
import '../components/css/pokemonPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faWeight, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { typeColors } from '../components/services/types'
import imgBackground from '../assets/pokeball-fondo-detail.png'
import Loading from '../components/Loading'
import PokemonStats from '../components/StatsBar'

export const PokemonPage = () => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const [weakness, setWeakness] = useState([])

  const { id } = useParams()

  const getPokemon = async (id) => {
    setLoading(true)
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

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
    getPokemon(id)
    getPokemonsWeakness(id)
  }, [])

  const getTypeColor = (type) => {
    return Object.hasOwnProperty.call(typeColors, type) ? typeColors[type] : typeColors.default
  }
  const getImgBackground = () => {
    const typeColor = getTypeColor(pokemon.types[0].type.name)
    return { backgroundColor: typeColor }
  }

  const getColorType = () => {
    const typeColor = getTypeColor(pokemon.types[0].type.name)
    return { color: typeColor }
  }

  return (
    <main>
      {loading
        ? <Loading />
        : (
          <div className='pokemon-card-detailed'>
            <div className='poke-top-container' style={getImgBackground()}>
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
              <h2 style={getColorType()}>ABOUT</h2>
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
              <h2 style={getColorType()}>BASE STATS</h2>
              <PokemonStats stats={pokemon.stats} type={pokemon.types[0].type.name} />
              <h2 style={getColorType()}>WEAKNESS</h2>
              {weakness.map((type, key) => {
                return (
                  <div key={key} className='weakness-container'>
                    <div className='poke-type-detail1'>
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
                  </div>
                )
              })}
            </div>
          </div>
          )}
    </main>
  )
}
