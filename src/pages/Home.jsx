import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <img style={{ width: "50%" }} src={"../public/assets/pokemon-logo.png"} />
      <h1 style={{ color: "red" }}>포켓몬 도감</h1>
      <Button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </Button>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Button = styled.button`
  border: none;
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #b81919;
    transition: all 0.3s;
  }
`;
