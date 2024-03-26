import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  useFetchPokemonListQuery,
  useGetPokemonByNameQuery,
  useGetPokemonKoNameQuery,
} from '../services/pokemon';
import PokemonProfile from '../components/PokemonDetailCard/PokemonProfile';
import PokemonType from '../components/PokemonCard/PokemonType';
import PokemonAbility from '../components/PokemonDetailCard/PokemonAbility';

const PokemonDetail = () => {
  const pokemonInfo = useLocation().state;
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonInfo.name);

  if (error) {
    return <>Oh, there was an error</>;
  }

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <>
      <div className="w-100vw">
        <div className="h-32"></div>
        <div className="w-screen h-32 flex items-center bg-white justify-between">
          <button className="w-[49.6%] h-full bg-neutral-800">
            //이전번호포켓몬 페이지
          </button>
          <button className="w-[49.6%] h-full bg-neutral-800">
            //다음번호 포켓몬 페이지
          </button>
        </div>
      </div>
      <div className="w-100vw h-[700px] relative bg-neutral-100">
        <div className="w-[1250px] absolute top-[-40px] left-[calc(50vw-625px)] bg-white rounded-lg border-solid border-[3px] border-neutral-800">
          <div className="flex p-[50px]">
            <div className="w-[542px] h-[583px] flex justify-center items-center px-[15px]">
              <img
                className="w-[390px] h-[390px]"
                src={data.sprites.other['official-artwork'].front_default}
                alt={data.species.name}
              />
            </div>
            <div className="p-[15px]">
              <h3 className="flex flex-col text-5xl font-extrabold mb-8">
                <span className="text-2xl text-gray-400 font-normal mb-1">
                  No.{pokemonInfo.id}
                </span>
                {pokemonInfo.koName}
              </h3>
              <div className="flex justify-between">//설명버튼들 생성</div>
              <p>버튼따라 설명 다르게</p>
              <div className="w-[540px] h-auto rounded-md border-[1.5px] border-neutral-150 px-[30px] pt-[8px] pb-[20px]">
                <div className=" h-[87px] flex justify-around border-b-[1.5px] border-neutral-150 my-[20px] ">
                  <div className="flex flex-col ">
                    <span className="mb-[10px] text-gray-400 font-semibold">타입</span>
                    <div className="flex ">
                      {pokemonInfo.types.map((type) => (
                        <PokemonType type={type} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-[10px] text-gray-400 font-semibold">키</span>
                    {data.height / 10}m
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-[10px] text-gray-400 font-semibold">분류</span>
                    {pokemonInfo.genus}
                  </div>
                </div>
                <div className="h-[87px] flex justify-around ">
                  <div className="flex flex-col">
                    <span className="mb-[10px] text-gray-400 font-semibold">성별</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-[10px] text-gray-400 font-semibold">몸무게</span>
                    {data.weight / 10}kg
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-[10px] text-gray-400 font-semibold">특성</span>
                    <div className="flex">
                      {data.abilities.map((ability) => (
                        <PokemonAbility ability={ability.ability.name} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
