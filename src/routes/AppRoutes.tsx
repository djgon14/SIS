import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Al entrar a SIS se muestra directamente el carrusel de proyecto */}
        <Route path="/" element={<Navigate to="/carrusel.html" replace />} />
        <Route path="/home-original" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
