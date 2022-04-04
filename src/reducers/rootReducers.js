import { combineReducers } from 'redux';
import PokemonListReducer from './pokemonReducers';
import PokemonMultipleReducer from './PokemonMultipleReducer';

const rootReducers = combineReducers({
  pokemonList: PokemonListReducer,
  pokemon: PokemonMultipleReducer
});

export default rootReducers;
