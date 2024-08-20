import styled from "styled-components";

const PokemonCard = ({ onAdd, pokemon, isSelected }) => {
  const { img_url, korean_name } = pokemon;
  // console.log(pokemon);
  return (
    <Card>
      <img src={img_url} />
      <p>{korean_name}</p>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button onClick={() => {}}>추가</Button>
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
