import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../components/PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dex" element={<Dex />}></Route>
        <Route path="/detail/:id" element={<PokemonDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
