import {
  RETRIEVE_POKEMONS, RETRIEVE_POKEMON_DETAIL,
} from "./types";

import PokemonDataService from "../services/pokemon.service";

export const retrievePokemons = () => async (dispatch) => {
  try {
    const res = await PokemonDataService.getAll();

    dispatch({
      type: RETRIEVE_POKEMONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const retrievePokemonDetail = () => async (dispatch) => {
  try {
    const res = await PokemonDataService.getAdditionalData();

    dispatch({
      type: RETRIEVE_POKEMON_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
