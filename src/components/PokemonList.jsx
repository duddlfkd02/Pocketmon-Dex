import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = ({ pokemonList }) => {
  const { addPokemon, selectedPokemon } = useContext(PokemonContext);
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => addPokemon(pokemon)}
          isSelected={selectedPokemon.some(
            (selected) => selected.id === pokemon.id
          )}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px 10px;
  margin: 20px;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 20px;
`;
