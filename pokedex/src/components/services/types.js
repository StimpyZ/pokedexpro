export const typeColors = {
  bug: '#A8B820',
  dark: '#705848',
  dragon: '#7038F8',
  electric: '#F8D030',
  fire: '#F08030',
  flying: '#A890F0',
  ghost: '#705898',
  grass: '#78C850',
  ground: '#E0C068',
  ice: '#98D8D8',
  normal: '#A8A878',
  poison: '#A040A0',
  psychic: '#F85888',
  rock: '#B8A038',
  steel: '#B8B8D0',
  water: '#6890F0',
  fighting: '#C03028',
  fairy: '#EE99AC',
  default: '#2A1A1F'
}

export const getTypeColor = (type) => {
  return Object.hasOwnProperty.call(typeColors, type) ? typeColors[type] : typeColors.default
}
export const getImgBackground = (pokemon) => {
  const typeColor = getTypeColor(pokemon.types[0].type.name)
  return { backgroundColor: typeColor }
}

export const getColorType = (pokemon) => {
  const typeColor = getTypeColor(pokemon.types[0].type.name)
  return { color: typeColor }
}
