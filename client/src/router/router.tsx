import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import PreferencePage from "../pages/preference";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preference" element={<PreferencePage />} />
      <Route
        path="/preference-views"
        element={
          <>
            <div>HHHHHHHHH</div>
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
