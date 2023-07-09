import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Analysis from "./pages/Analysis";
import Sandbox from "./pages/Sandbox";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
        
        {/* <Sandbox /> */}
      
    </BrowserRouter>
  );
}

export default AppRoutes;
