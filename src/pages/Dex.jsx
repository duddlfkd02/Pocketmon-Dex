import MOCK_DATA from "../mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonProvider } from "/src/context/PokemonContext.jsx";

const Dex = () => {
  return (
    <PokemonProvider>
      <div>
        <Dashboard />
        <PokemonList pokemonList={MOCK_DATA} />
      </div>
    </PokemonProvider>
  );
};

export default Dex;
