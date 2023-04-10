import http from '../PokemonAPI'

const searchForPokemon = (userSearch) => {
    return http.get(`/${userSearch}`)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    searchForPokemon
}
