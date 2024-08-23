import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const notify = (message) =>
    toast(message, {
      position: "top-center",
    });

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      notify("최대 6개까지만 선택할 수 있습니다.");
      return;
    }

    if (!selectedPokemon.some((item) => item.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      notify("이미 선택한 포켓몬입니다.");
      return;
    }
  };

  const removePokemon = (pokemonId) => {
    const filteredPokemon = selectedPokemon.filter((item) => {
      return item.id !== pokemonId;
    });
    setSelectedPokemon(filteredPokemon);
    notify("포켓몬이 삭제되었습니다.");
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
