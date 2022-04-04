/* eslint-disable consistent-return */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/actions';

function PokemonPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const pokeName = params.pokemonID;

  const fetchData = () => {
    //   get the data given by the url info
    dispatch(GetPokemon(pokeName));
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const pokemonState = useSelector((state) => state.pokemon);

  const showData = () => {
    if (pokemonState.data !== undefined) {
      if (pokemonState.data[pokeName]) {
        const pokeData = pokemonState.data[pokeName];
        return (
          <div className="pokemon-page">
            <div className="back-button">
              <Link to="/">Volver</Link>
            </div>
            <div className="pokemon-page-card">
              <div
                className={`pokemon-page-header background-${pokeData.types[0].type.name}`}
              >
                <h2 className="pokemon-name">{pokeData.name}</h2>
              </div>
              <div className="pokemon-page-info">
                <div className="pokemon-image">
                  <img src={pokeData.sprites.front_default} alt="" />
                </div>
                <div className="pokemon-order">Nº {pokeData.order}</div>
                <div className="pokemon-info">
                  <div className="pokemon-types">
                    {pokeData.types.map((item, index) => (
                      <p
                        className={`card-info-type background-${item.type.name}`}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                      >
                        {item.type.name}
                      </p>
                    ))}
                  </div>
                  <div className="pokemon-height">
                    <span>height: </span>
                    {pokeData.height / 10} m
                  </div>
                  <div className="pokemon-weight">
                    <span>weight: </span>
                    {pokeData.weight / 10} Kg
                  </div>
                </div>
              </div>
              <div className="pokemon-page-movements">
                <h4>movements</h4>
                <div className="pokemon-movements">
                  {pokeData.moves.slice(0, 4).map((move, index) => (
                    <p
                      className="move"
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                    >
                      {move.move.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
  return (
    <div>
      <div>{showData()}</div>
    </div>
  );
}

export default PokemonPage;
