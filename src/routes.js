import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Analysis from "./pages/Analysis";
import TicketManagement from "./pages/TicketManagement";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/UserContext";


function AppRoutes() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<Cadastro />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/management" element={<TicketManagement />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default AppRoutes;
