import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const PokemonCard = ({ onAdd, pokemon }) => {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();
  // const notify = () => toast("Notify!", { position: "top-center" });

  return (
    <Card
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <img src={img_url} alt={korean_name} />
      <p>{korean_name}</p>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onAdd(pokemon);
        }}
      >
        {/* <ToastContainer /> */}
        추가
      </Button>
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  width: 150px;
  height: 250px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3f3f3f;
  font-size: 14px;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 5px 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
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
  }
`;
