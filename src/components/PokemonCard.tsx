import React from 'react';
import { useGetPokemonByNameQuery } from '../services/pokemon';

interface PokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  if (error) {
    return <>Oh, there was an error</>;
  }

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <>
      {data ? (
        <li className="px-3 mt-10">
          <img
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.species.name}
          />
          <h3>No.{data.id}</h3>
          <h2>{data.species.name}</h2>
          <div className="flex">
            {data.types.map((type: string) => (
              <div>{type.type.name}</div>
            ))}
          </div>
        </li>
      ) : null}
    </>
  );
};

export default PokemonCard;
