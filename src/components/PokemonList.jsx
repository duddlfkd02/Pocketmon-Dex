import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  // console.log(pokemonList);
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => {
        // console.log(pokemon.korean_name);
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={onAddPokemon}
            isSelected={false}
          ></PokemonCard>
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  border: 1px solid blue;
  margin: 20px;
`;
