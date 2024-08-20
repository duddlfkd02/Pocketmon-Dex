import { useState } from "react";
import MOCK_DATA from "../mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = () => {
    const addPokemonCard = {
      id: MOCK_DATA.id,
      name: MOCK_DATA.korean_name,
      img: MOCK_DATA.img_url,
    };
    setSelectedPokemon(addPokemonCard);
  };

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
