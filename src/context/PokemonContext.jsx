import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const INIT_TEXT = Array.from({ length: 6 }, () => null);
  const [selectedPokemon, setSelectedPokemon] = useState(INIT_TEXT);

  const notify = (message) =>
    toast(message, {
      position: "top-center",
    });

  const addPokemon = (pokemon) => {
    // 중복 체크
    const isAlreadySelected = selectedPokemon.some((item) => {
      return item && item.id === pokemon.id;
    });

    if (isAlreadySelected) {
      notify("이미 선택한 포켓몬입니다.");
      return;
    }

    // 최대 6개 체크
    const selectedCount = selectedPokemon.filter(
      (item) => item !== null
    ).length;

    if (selectedCount >= 6) {
      notify("최대 6개까지 선택할 수 있습니다.");
      return;
    }

    // 선택된 포켓몬 리스트에 추가
    const firstNullIndex = selectedPokemon.indexOf(null);

    if (firstNullIndex !== -1) {
      const newSelectedPokemon = [...selectedPokemon];
      newSelectedPokemon[firstNullIndex] = pokemon;

      setSelectedPokemon(newSelectedPokemon);
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
