import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: Array.from({ length: 6 }, () => null),
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,

  reducers: {
    addPokemon: (state, action) => {
      const selectedCount = state.selectedPokemon.filter(
        (item) => item !== null
      ).length;

      if (selectedCount >= 6) {
        alert("최대 6개까지 선택할 수 있습니다.");
        return;
      }

      const isAlreadySelected = state.selectedPokemon.some((item) => {
        return item && item.id === action.payload.id;
      });

      if (isAlreadySelected) {
        alert("이미 선택한 포켓몬입니다.");
        return;
      }

      const firstNullIndex = state.selectedPokemon.indexOf(null);
      if (firstNullIndex !== -1) {
        state.selectedPokemon[firstNullIndex] = action.payload;
      }
    },

    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.map((pokemon) =>
        pokemon && pokemon.id === action.payload.id ? null : pokemon
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
