import React from 'react';

const Nav = () => {
  return (
    <header className="flex w-screen h-32 justify-between items-center fixed bg-white  shadow-lg shadow-black-400/50 z-[100]">
      <h1 className="w-[25%]  flex justify-center items-center">
        <img
          className="w-3/5 max-width-37"
          src="https://pokemonkorea.co.kr/img/main_logo.png"
        />
      </h1>
      <div className="w-screen max-w-7xl h-full flex justify-between px-2">
        <nav className="w-full h-full contents flex ">
          <ul className="w-[65%] h-full flex">
            <li className="w-1/5 h-full flex flex-col items-center justify-center border">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_news.png" />
              소식
            </li>
            <li className="w-1/5 h-full flex flex-col items-center justify-center border">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_game.png" />
              게임
            </li>
            <li className="w-1/5 h-full flex flex-col items-center justify-center border">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_card.png" />
              카드게임
            </li>
            <li className="w-1/5 h-full flex flex-col items-center justify-center border">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_ani.png" />
              애니메이션
            </li>
            <li className="w-1/5 h-full flex flex-col items-center justify-center border">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_ball.png" />
              상품
            </li>
          </ul>
          <ul className="flex h-full">
            <li className="flex flex-col items-center justify-center mx-3">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_ball_c.png" />
              포켓몬 도감
            </li>
            <li className="flex flex-col items-center justify-center mx-3">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_login.png" />
              로그인
            </li>
            <li className="flex flex-col items-center justify-center mx-3">
              <img src="https://pokemonkorea.co.kr/img/icon/icon_search.png" />
              통합검색
            </li>
          </ul>
        </nav>
      </div>
      <a className="h-full flex items-center ml-11 bg-yellow-300">
        <img src="https://pokemonkorea.co.kr/img/a-store.png" />
      </a>
    </header>
  );
};

export default Nav;
