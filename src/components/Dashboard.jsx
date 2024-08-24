import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext.jsx";

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      <DashboardCardBox>
        {selectedPokemon.map((pokemon, index) => (
          <DashboardCard key={index}>
            {pokemon ? (
              <>
                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                <p>{pokemon.korean_name}</p>
                <Button onClick={() => removePokemon(pokemon.id)}>삭제</Button>
              </>
            ) : (
              <img style={{ width: "60%" }} src="./src/assets/pokeball.png" />
            )}
          </DashboardCard>
        ))}
      </DashboardCardBox>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  height: 300px;
  margin: 20px;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 10px;
  text-align: center;
  color: red;
`;

const DashboardCardBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const DashboardCard = styled.li`
  width: 120px;
  height: 200px;
  margin: 0 30px;
  padding: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3f3f3f;
  font-size: 14px;
  background-color: white;
  border-radius: 8px;
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
