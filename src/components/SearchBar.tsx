import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex">
      <div className="flex">
        <img src="https://pokemonkorea.co.kr/img/icon/icon_ball_b.png" />
        <span>포켓몬 도감</span>
      </div>
      <div>
        <input placeholder="포켓몬 이름 또는 설명, 특성 키워드를 입력해주세요" />
        <button>검색</button>
      </div>
    </div>
  );
};

export default SearchBar;
