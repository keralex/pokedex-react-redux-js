import React from 'react';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

import SearchBar from './components/searchBar';
// import PokemonList from './containers/pokemonList';
// import PokemonPage from './containers/pokemonPage';
import './scss/pokeApp.scss';

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <Navbar />
        <SearchBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
