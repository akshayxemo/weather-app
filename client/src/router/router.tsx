import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
