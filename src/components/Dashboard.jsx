//선택한 포켓몬 보여주기

import styled from "styled-components";

const DashboardContainer = styled.div`
  height: 250px;
  border: 1px solid black;
  margin: 20px;
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  if (selectedPokemon.length > 6) {
    alert("최대 6개까지만 선택할 수 있습니다.");
    // return true;
  }

  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>포켓몬을 선택해주세요.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.img_url} />
              {pokemon.korean_name}
              <button onClick={() => onRemovePokemon(pokemon.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
