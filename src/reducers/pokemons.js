import {
  RETRIEVE_POKEMONS,
  RETRIEVE_POKEMON_DETAIL
} from "../actions/types";

const initialState = [];

function pokemonReducer(pokemons = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_POKEMONS:
      return payload.results;
    case RETRIEVE_POKEMON_DETAIL:
      return payload
    default:
      return pokemons;
  }
};

export default pokemonReducer;