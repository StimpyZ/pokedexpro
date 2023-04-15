import React from 'react'
import './css/statsPokemon.css'
import { typeColors } from './services/types'

const PokemonStats = ({ stats, type }) => {
  const statNames = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD']

  return (
    <div className='poke-stats-container'>
      {stats.map((stat, index) => (
        <div className='poke-stat' key={statNames[index]} style={{ color: typeColors[type] || typeColors.default }}>
          <div className='stat-num'>
            <p>{statNames[index]}</p>
          </div>
          <div className='stat-num'>
            <p>{stat.base_stat}</p>
          </div>
          <div className='stat-bar'>
            <div className='stat-bar-fill' style={{ width: `${Math.min(stat.base_stat, 100)}%`, backgroundColor: typeColors[type] || typeColors.default }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokemonStats
