//선택한 포켓몬 보여주기

import styled from "styled-components";

const DashboardContainer = styled.div`
  height: 250px;
  border: 1px solid black;
  margin: 20px;
`;

const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>포켓몬을 선택해주세요.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => {
            <li key={pokemon.id}>{pokemon.korean_name}</li>;
          })}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
