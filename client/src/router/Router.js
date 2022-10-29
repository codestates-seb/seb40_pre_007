import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main/Main";
import { Login } from "../pages/Login/Login";
import { Ask } from "../pages/Ask/Ask";
import { Signup } from "../pages/Signup/Signup";
import { Detail } from "../pages/Detail/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
