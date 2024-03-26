import React from 'react';
import { useFetchPokemonListQuery } from '../../services/pokemon';

const PokemonAbility = ({ ability }) => {
  const { data, error, isLoading } = useFetchPokemonListQuery(`ability/${ability}`);
  console.log(data);
  if (error) {
    return <>Oh, there was an error</>;
  }

  if (isLoading) {
    return <>Loading ...</>;
  }

  return <div>{data.names[1].name}</div>;
};

export default PokemonAbility;
