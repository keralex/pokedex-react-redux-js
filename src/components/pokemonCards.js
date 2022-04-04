/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetPokemon } from '../actions/actions';

function PokemonCard({ pokemonInfo }) {
  const dispatch = useDispatch();
  const pokeName = pokemonInfo[0];
  const fetchData = () => {
    //   get the data given by the url info
    dispatch(GetPokemon(pokeName));
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const pokemonState = useSelector((state) => state.pokemon);
  // eslint-disable-next-line consistent-return
  const showData = () => {
    if (pokemonState.data !== undefined) {
      if (pokemonState.data[pokeName]) {
        const pokeData = pokemonState.data[pokeName];
        return (
          <Link className="pokemon-card-link" to={`/pokemon/${pokeName}`}>
            <div className="card-image">
              <div className="card-image-front">
                <img src={pokeData.sprites.front_default} alt="" />
              </div>
              <div className="card-image-back">
                <img src={pokeData.sprites.front_shiny} alt="" />
              </div>
            </div>

            <div className="card-info">
              <h2 className="card-info-order">Nº {pokeData.order}</h2>
              <h2 className="card-info-title">{pokeName}</h2>
              <div className="card-info-types">
                {pokeData.types.map((item, index) => (
                  <p
                    className={`card-info-type background-${item.type.name}`}
                    key={index}
                  >
                    {item.type.name}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        );
      }

      if (pokemonState.loading) {
        return <p>Loading...</p>;
      }

      if (pokemonState.errorMsg !== '') {
        return <p>{pokemonState.errorMsg}</p>;
      }

      return <p>error getting pokemon</p>;
    }
  };

  return <div className="pokemon-card-wrapper">{showData()}</div>;
}
PokemonCard.propTypes = {
  pokemonInfo: PropTypes.array
};
PokemonCard.defaultProps = {
  pokemonInfo: {}
};
export default PokemonCard;
