import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PokemonDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const pokemonId = Number(params.id);
  const pokemon = useSelector((state) =>
    state.pokemons.selectedPokemon.find((p) => p.id === pokemonId)
  );

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2 style={{ color: "red" }}>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(",")}</p>
      <p>{pokemon.description}</p>

      <Button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        뒤로 가기
      </Button>
    </DetailContainer>
  );
};

export default PokemonDetail;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const DetailImg = styled.img`
  width: 250px;
`;

const Button = styled.button`
  border: none;
  margin-top: 20px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #b81919;
    transition: all 0.3s;
  }
`;
