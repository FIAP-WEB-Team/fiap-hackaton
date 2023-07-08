import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Sandbox from "./pages/Sandbox";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />

        <Cadastro />
        {/* <Sandbox /> */}
      
    </BrowserRouter>
  );
}

export default AppRoutes;
