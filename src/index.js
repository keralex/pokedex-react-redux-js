import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PokemonList from './containers/pokemonList';
import PokemonPage from './containers/pokemonPage';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PokemonList />} />
            <Route path="pokemon" element={<PokemonPage />}>
              <Route path=":pokemonID" element={<PokemonPage />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
