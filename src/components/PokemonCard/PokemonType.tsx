import React from 'react';
import { useFetchPokemonListQuery } from '../../services/pokemon';

interface PokemonTypeProps {
  type: string;
}

const typeColor = {
  normal: '#999999',
  fighting: '#FFA201',
  flying: '#95C9FF',
  poison: '#994ECE',
  ground: '#AB7A38',
  rock: '#BCB888',
  bug: '#9FA425',
  ghost: '#6E4570',
  steel: '#6AAED3',
  fire: '#FF612D',
  water: '#2992FF',
  grass: '#42BF23',
  electric: '#FFDB00',
  psychic: '#000000',
  ice: '#42D8FF',
  dragon: '#5462D6',
  dark: '#4F4647',
  fairy: '#FFB1FF',
  unknown: '#000000',
  shadow: '#000000',
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  const { data, error, isLoading } = useFetchPokemonListQuery(`type/${type}`);
  if (error) {
    return <>Oh, there was an error</>;
  }

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <span
      className="w-[47%] h-[29px] rounded flex justify-center items-center text-white font-semibold"
      style={{ backgroundColor: `${typeColor[`${type}`]}` }}
    >
      {data.names[1].name}
    </span>
  );
};

export default PokemonType;
