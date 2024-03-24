// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from './types';

// base URL과 엔드포인트들로 서비스 정의
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 생성된 훅을 함수형 컴포넌트에서 사용하기 위해 export
export const { useGetPokemonByNameQuery } = pokemonApi;
