import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
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
