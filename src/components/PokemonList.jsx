import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/modules/pokemonSlice";

const PokemonList = ({ pokemonList }) => {
  const pokemons = useSelector((state) => state.pokemons.selectedPokemon);
  const dispatch = useDispatch();

  const onAddButton = (pokemon) => {
    dispatch(addPokemon(pokemon));
  };

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => {
        const isSelected = pokemons.some(
          (selected) => selected && selected.id === pokemon.id
        );

        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => onAddButton(pokemon)}
            isSelected={isSelected}
          />
        );
      })}
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
