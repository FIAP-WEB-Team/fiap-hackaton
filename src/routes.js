import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />

        <Cadastro />
      
    </BrowserRouter>
  );
}

export default AppRoutes;
