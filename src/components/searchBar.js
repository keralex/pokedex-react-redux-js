/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetPokemon } from '../actions/actions';
// import { useDispatch } from 'react-redux';

const { useState } = React;

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const onchange = (e) => {
    setSearch(e.target.value);
  };
  const onclick = () => {
    dispatch(GetPokemon(search));
    navigate(`/pokemon/${search}`);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Buscar Pokemon"
        onChange={onchange}
      />
      <button onClick={onclick} type="button">
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
