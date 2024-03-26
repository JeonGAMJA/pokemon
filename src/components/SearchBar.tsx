import React from 'react';

const SearchBar = () => {
  return (
    <>
      <div className="h-32"></div>
      <div className="w-screen h-32 flex items-center bg-neutral-800 px-5 justify-center">
        <div className="flex w-40 h-full items-center mr-5">
          <img
            className="w-9 h-9"
            src="https://pokemonkorea.co.kr/img/icon/icon_ball_b.png"
          />
          <span className="text-2xl text-white font-bold">포켓몬 도감</span>
        </div>
        <div className="contents">
          <input
            className="w-10/12 h-14 bg-stone-950 p-5 text-xl text-white"
            placeholder="포켓몬 이름 또는 설명, 특성 키워드를 입력해주세요"
          />
          <button className="w-14 h-14 bg-red-600 text-white">검색</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
