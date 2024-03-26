import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './pages/Pokedex';
import PokemonDetail from './pages/PokemonDetail';
import Nav from './components/Nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pokedex />} />
          <Route path=":pokemonName" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
