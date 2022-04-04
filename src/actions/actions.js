// /* eslint-disable no-restricted-globals */
import axios from 'axios';
// eslint-disable-next-line import/prefer-default-export
export const getPokemonsList = (page, pokemonAmount) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING'
    });
    const perpage = pokemonAmount;
    const offset = page * perpage - perpage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perpage}&offset=${offset}`
    );
    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL'
    });
  }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING'
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: res.data,
      pokemonName: pokemon
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL'
    });
  }
};

// export const getPokemonSearch = (pokeSearch) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'POKEMON_SEARCH_LOADING'
//     });
//     const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
//     dispatch({
//       type: 'POKEMON_SEARCH_SUCCESS',
//       payload: res.data
//     });
//   } catch (e) {
//     dispatch({
//       type: 'POKEMON_SEARCH_FAIL'
//     });
//   }
// };
