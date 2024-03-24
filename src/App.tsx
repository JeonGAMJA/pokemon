import { useState } from 'react';
import { useGetPokemonByNameQuery } from './services/pokemon';

import './App.css';

function App() {
  // 자동으로 데이터를 패치하고 쿼리 값을 가져오는 쿼리 hook을 사용
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  // 각각의 hooks은 생성된 엔드포인트에서도 접근 가능함
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data);
  return (
    <div>
      {error ? (
        <>Oh no,there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}

export default App;
