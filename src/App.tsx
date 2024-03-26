import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './pages/Pokedex';
import PokemonDetail from './pages/PokemonDetail';

const Layout = () => {
  return (
    <>
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
          <Route path=":pokemonId" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
