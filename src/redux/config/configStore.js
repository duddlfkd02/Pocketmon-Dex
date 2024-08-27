import { configureStore } from "@reduxjs/toolkit";
import pokemons from "../modules/pokemonSlice";

const store = configureStore({
  reducer: { pokemons: pokemons },
});

export default store;
