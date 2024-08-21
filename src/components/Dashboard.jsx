//선택한 포켓몬 보여주기

import styled from "styled-components";

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  if (selectedPokemon.length > 6) {
    alert("최대 6개까지만 선택할 수 있습니다.");
    // return true;
    // return을 쓰면 alert창이 2번 뜨고 대쉬보드가 사라짐
    // 경고창이 2번씩 뜨는 이유?
  }

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>포켓몬을 선택해주세요.</p>
      ) : (
        <DashboardCardBox>
          {selectedPokemon.map((pokemon) => (
            <DashboardCard key={pokemon.id}>
              <img src={pokemon.img_url} />
              {pokemon.korean_name}
              <Button onClick={() => onRemovePokemon(pokemon.id)}>삭제</Button>
            </DashboardCard>
          ))}
        </DashboardCardBox>
      )}
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
  color: #ff4229;
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
