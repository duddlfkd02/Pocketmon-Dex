import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const INIT_TEXT = [null, null, null, null, null, null];
  const [selectedPokemon, setSelectedPokemon] = useState(INIT_TEXT);

  const notify = (message) =>
    toast(message, {
      position: "top-center",
    });

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((item) => item && item.id === pokemon.id)) {
      notify("이미 선택한 포켓몬입니다.");
      return;
    }

    const firstNullIndex = selectedPokemon.indexOf(null);

    if (firstNullIndex !== -1) {
      const newSelectedPokemon = [...selectedPokemon];
      newSelectedPokemon[firstNullIndex] = pokemon;
      setSelectedPokemon(newSelectedPokemon);
    } else {
      notify("최대 6개까지 선택할 수 있습니다.");
    }
  };

  const removePokemon = (pokemonId) => {
    const updatedPokemon = selectedPokemon.map((pokemon) =>
      pokemon && pokemon.id === pokemonId ? null : pokemon
    );
    setSelectedPokemon(updatedPokemon);
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
      <StyledToastContainer />
      {children}
    </PokemonContext.Provider>
  );
}

//toast 라이브러리 css
const StyledToastContainer = styled(ToastContainer).attrs({
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
})`
  .Toastify__toast {
    background-color: #fafafa;
    color: #ff4444;
    height: 90px;
    text-align: center;
  }
  .Toastify__toast-body {
    font-size: 18px;
  }
`;
