import styled from "styled-components";

const PokemonCard = ({ onAdd, pokemon, onRemove, isSelected }) => {
  const { img_url, korean_name, id } = pokemon;
  return (
    <Card>
      <img src={img_url} alt={korean_name} />
      <p>{korean_name}</p>
      {isSelected ? (
        <Button onClick={() => onRemove(id)}>삭제</Button>
      ) : (
        <Button onClick={() => onAdd(pokemon)}>추가</Button>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid black;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
