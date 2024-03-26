import React from 'react';

import { useFetchPokemonListQuery } from '../services/pokemon';

import PokemonCard from '../components/PokemonCard';
import Nav from '../components/Nav/Nav';
import SearchBar from '../components/SearchBar';

//포켓몬 20개씩 데이터(사진,이름) 가져오기
//포켓몬 상세정보 페이지
//무한스크롤
const Pokedex = () => {
  const { data: pokemonData, error, isLoading } = useFetchPokemonListQuery('pokemon');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const pokemonList = pokemonData.results;

  const pokemonNames = pokemonList.map((pokemon: { name: string }) => pokemon.name);

  return (
    <>
      <Nav />
      <SearchBar />
      <section>
        <select></select>
        <ul className="flex flex-wrap clear-both">
          {pokemonNames.map((name: string, index: number) => (
            <PokemonCard key={`${name}_${index}`} name={name} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Pokedex;
