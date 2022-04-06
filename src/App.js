import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
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
