import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개까지만 선택할 수 있습니다.");
      return;
    }

    if (!selectedPokemon.some((item) => item.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
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
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
