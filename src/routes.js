import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Analysis from "./pages/Analysis";
import TicketManagement from "./pages/TicketManagement";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/management" element={<TicketManagement />} />
        </Routes>
        
        {/* <Sandbox /> */}
      
    </BrowserRouter>
  );
}

export default AppRoutes;
