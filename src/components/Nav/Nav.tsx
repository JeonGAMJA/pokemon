import React from 'react';

const Nav = () => {
  return (
    <header className="flex">
      <h1>
        <a>
          <img src="https://pokemonkorea.co.kr/img/main_logo.png" />
        </a>
      </h1>
      <nav className="flex">
        <ul className="flex">
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_news.png" />
            소식
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_game.png" />
            게임
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_card.png" />
            카드게임
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_ani.png" />
            애니메이션
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_ball.png" />
            상품
          </li>
        </ul>
        <ul className="flex">
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_ball_c.png" />
            포켓몬 도감
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_login.png" />
            로그인
          </li>
          <li>
            <img src="https://pokemonkorea.co.kr/img/icon/icon_search.png" />
            통합검색
          </li>
        </ul>
      </nav>
      <a>
        <img src="https://pokemonkorea.co.kr/img/a-store.png" />
      </a>
    </header>
  );
};

export default Nav;
