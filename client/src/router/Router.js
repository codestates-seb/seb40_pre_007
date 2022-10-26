import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main/Main";
import { Login } from "../pages/Login/Login";
import { Ask } from "../pages/Ask/Ask";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ask" element={<Ask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
