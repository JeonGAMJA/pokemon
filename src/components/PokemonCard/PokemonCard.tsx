import React from 'react';
import {
  useGetPokemonByNameQuery,
  useGetPokemonKoNameQuery,
} from '../../services/pokemon';
import PokemonType from './PokemonType';

interface PokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  const {
    data: pokemonName,
    error: pokemonNameError,
    isLoading: pokemonNameIsLoading,
  } = useGetPokemonKoNameQuery(name);
  if (error || pokemonNameError) {
    return <>Oh, there was an error</>;
  }

  if (isLoading || pokemonNameIsLoading) {
    return <>Loading ...</>;
  }
  console.log(data.species);
  return (
    <>
      {data ? (
        <li className="px-3 my-10 w-2/12">
          <img
            className="border rounded-lg p-5"
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.species.name}
          />
          <div className="mx-4 mt-2">
            <h3 className="text-sm text-gray-400 mb-2">
              No.{String(data.id).padStart(4, '0')}
            </h3>
            <h2 className="text-2xl font-bold">{pokemonName.names[2].name}</h2>
          </div>
          <div className="flex">
            {data.types.map((type: string) => (
              <PokemonType type={type.type.name} />
            ))}
          </div>
        </li>
      ) : null}
    </>
  );
};

export default PokemonCard;
