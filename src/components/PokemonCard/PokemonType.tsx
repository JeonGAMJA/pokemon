import React from 'react';

interface PokemonTypeProps {
  type: string;
}

const colot = {
  grass: '#28a745',
  poison: '#6610f2',
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  return <span>{type}</span>;
};

export default PokemonType;
