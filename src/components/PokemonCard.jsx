import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ onAdd, pokemon, onRemove, isSelected }) => {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <img src={img_url} alt={korean_name} />
      <p>{korean_name}</p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  width: 150px;
  height: 250px;
  margin: 0 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3f3f3f;
  font-size: 14px;
`;

const Button = styled.button`
  border: none;
  margin-top: 20px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
`;
