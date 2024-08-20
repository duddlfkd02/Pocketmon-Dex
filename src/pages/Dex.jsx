import { useState } from "react";
import MOCK_DATA from "../mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (!selectedPokemon.some((item) => item.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else if (selectedPokemon) {
      alert("이미 선택한 포켓몬 입니다.");
      return;
    }
  };

  const removePokemon = (pokemonId) => {
    const filteredPokemon = selectedPokemon.filter((item) => {
      return item.id !== pokemonId;
    });
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        onAddPokemon={addPokemon}
      />
    </div>
  );
};

export default Dex;
