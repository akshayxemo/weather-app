import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import PreferencePage from "../pages/preference";
import WeatherReport from "../pages/weather";
import UnAuthenticated from "../components/UnAuthenticated";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/NotFound";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/preference"
        element={
          <ProtectedRoute>
            <PreferencePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/weather-report"
        element={
          <ProtectedRoute>
            <WeatherReport />
          </ProtectedRoute>
        }
      />
      <Route path="/unauthenticated" element={<UnAuthenticated />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
