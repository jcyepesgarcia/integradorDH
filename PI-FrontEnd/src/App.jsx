import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import { LoginPageContextprovider } from "./context/LoginPageContext";
import { Home, LoginPage, RegisterPage } from "./routes";

export const App = () => {
  //TODO falta agregar navbar y footer
  return (
    <>
      <div>
        <LoginPageContextprovider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          <Footer />
        </LoginPageContextprovider>
      </div>
    </>
  );
};
