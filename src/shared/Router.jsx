import Home from "../pages/Home";
import Dex from "../pages/Dex";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Dex />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
