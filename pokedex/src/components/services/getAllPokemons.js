export const pokemonFetchAPI = async (pokeName) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching pokemon data:', error)
    return null
  }
}

export const getPokemonsData = async (limit = 21, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching pokemons data:', error)
    return null
  }
}

export const getPokemonDataAPI = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching pokemon data:', error)
    return null
  }
}

export const getPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching pokemon data:', error)
    return null
  }
}
