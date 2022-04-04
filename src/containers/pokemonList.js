/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getPokemonsList } from '../actions/actions';
import PokemonCard from '../components/pokemonCards';

const { useState } = React;

function PokemonList() {
  const dispatch = useDispatch();
  // variables para definir la cantidad de pokemon por pagina
  const [pokemonAmount, setPokemonAmount] = useState('20');
  const fetchData = (page = 1) => {
    dispatch(getPokemonsList(page, pokemonAmount));
  };
  React.useEffect(() => {
    fetchData();
  }, [pokemonAmount]);
  // on change select pokemon amount per page
  const onchangeSelect = (e) => {
    const page = 1;
    setPokemonAmount(e.target.value);
    // dispatch(getPokemonsList(page, pokemonAmount));
  };
  const pokemonList = useSelector((state) => state.pokemonList);
  const showData = () => {
    if (pokemonList.data.results !== undefined) {
      if (pokemonList.data.results.length > 0) {
        return pokemonList.data.results.map((pokemonInfo, i) => (
          <div className="pokemon-card-container" key={pokemonInfo.name}>
            <PokemonCard pokemonInfo={Object.values(pokemonInfo)} />
          </div>
        ));
      }
    }
    if (pokemonList.loading) {
      return <p>loading</p>;
    }
    if (pokemonList.errorMessage.length > 1) {
      return <p>an error has occured</p>;
    }
  };
  return (
    <div className="pokemon-list">
      <div className="select-pokemon-amount">
        <span> Pokemons a Mostrar:</span>
        <select value={pokemonAmount} onChange={onchangeSelect}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      {showData()}
      {pokemonList.data.results !== undefined && (
        <div className="page-list">
          <ReactPaginate
            pageCount={Math.ceil(pokemonList.count / pokemonAmount)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => fetchData(data.selected + 1, pokemonAmount)}
            containerClassName="pagination"
          />
        </div>
      )}
    </div>
  );
}

export default PokemonList;
