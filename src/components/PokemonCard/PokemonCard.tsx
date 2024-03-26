import React from 'react';
import {
  useGetPokemonByNameQuery,
  useGetPokemonKoNameQuery,
} from '../../services/pokemon';
import PokemonType from './PokemonType';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  if (error || pokemonNameError) {
    return <>Oh, there was an error</>;
  }

  if (isLoading || pokemonNameIsLoading) {
    return <>Loading ...</>;
  }

  const handlePokemonCard = () => {
    navigate(`/${name}`, {
      state: {
        id: String(data.id).padStart(4, '0'),
        img: data.sprites.other['official-artwork'].front_default,
        koName: pokemonName.names[2].name,
        name: data.name,
        types: data.types.map((type) => type.type.name),
        genus: pokemonName.genera[1].genus,
      },
    });
  };

  return (
    <>
      {data ? (
        <li
          className="px-3 my-10 w-2/12 cursor-pointer group"
          onClick={handlePokemonCard}
        >
          <img
            className="border rounded-lg p-5 group-hover:translate-y-[-5px] ease-in-out duration-300 group-hover:shadow-lg shadow-black-300/50"
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.species.name}
          />
          <div className="mx-4 mt-2">
            <h3 className="text-sm text-gray-400 mb-2">
              No.{String(data.id).padStart(4, '0')}
            </h3>
            <h2 className="text-2xl font-bold">{pokemonName.names[2].name}</h2>
          </div>
          <div className="w-full flex justify-between mt-[45px] ">
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
