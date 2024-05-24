import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobrenos from "./pages/SobreNos/Sobrenos";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Organizações from "./pages/Organizaçoes/Organizações";
import Recuperarsenha from "./pages/RecuperarSenha/Recuperarsenha";
import PerfilOrg from "./pages/PerfilOrg/PerfilOrg";
import CursoPage from "./pages/CursoPage/CursoPage";
function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/organizações" element={<Organizações/>}></Route>
                <Route path="/perfilorganizacoes/:id" element={<PerfilOrg/>}></Route>
                <Route path="/sobrenos" element={<Sobrenos/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/recuperarsenha" element={<Recuperarsenha />}></Route>
                <Route path="/curso/:id" element={<CursoPage />}></Route>
            </Routes>
        </BrowserRouter>
   )
}
export default AppRoutes 