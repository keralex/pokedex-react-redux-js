/* eslint-disable default-param-last */
const defaulState = {
  loading: false,
  data: [],
  errorMessage: '',
  count: 0
};

const pokemonListReducer = (state = defaulState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'unable to get pokemon list'
      };
    case 'POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: '',
        count: action.payload.count
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
