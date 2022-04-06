import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PokemonCard from './pokemonCards';
import Store from '../store';

test('renders content', () => {
  const infoPokemon = ['name', 'url'];
  const component = render(
    <Provider store={Store}>
      <PokemonCard pokemonInfo={infoPokemon} />
    </Provider>
  );
  console.log(component);
});
