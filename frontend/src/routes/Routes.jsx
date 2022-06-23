import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ConsumoAgua from "../pages/ConsumoAgua";
import Relatorios from "../pages/Relatorios";
import ConsumoEnergia from "../pages/ConsumoEnergia";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TipoConsumoAgua from "../pages/TipoConsumoAgua";
import AcessoNegado from "../pages/AcessoNegado";
import Configuracoes from "../pages/Configuracoes";

import { ConsumptionCategoryEnum } from "../utils/enums/ConsumptionCategoryEnum";

import IconWashDishes from "../assets/img/icon-wash-dishes.png";
import IconWashClothes from "../assets/img/icon-wash-clothes.png";
import IconBrushTeeth from "../assets/img/icon-brush-teeth.png";
import IconTakeAShower from "../assets/img/icon-bath.png";
import CalculadoraAgua from "../pages/CalculadoraAgua";
import CalculadoraEnergia from "../pages/CalculadoraEnergia";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/relatorios" element={<PrivateRoute />}>
          <Route path="/relatorios" element={<Relatorios />} />
        </Route>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/acesso-negado" element={<AcessoNegado />} />
        
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/consumo-agua" element={<ConsumoAgua />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        
        <Route
          path="/consumo-agua/tomar-banho"
          element={
            <TipoConsumoAgua
              type={ConsumptionCategoryEnum.TOMAR_BANHO}
              icon={IconTakeAShower}
              pageSubtitle="Tomar banho"
            />
          }
        />
        <Route
          path="/consumo-agua/lavar-louca"
          element={
            <TipoConsumoAgua
              type={ConsumptionCategoryEnum.LAVAR_LOUCA}
              icon={IconWashDishes}
              pageSubtitle="Lavar Louça"
            />
          }
        />
        <Route
          path="/consumo-agua/escovar-dente"
          element={
            <TipoConsumoAgua
              type={ConsumptionCategoryEnum.ESCOVAR_DENTE}
              icon={IconBrushTeeth}
              pageSubtitle="Escovar Dente"
            />
          }
        />
        <Route
          path="/consumo-agua/lavar-roupa"
          element={
            <TipoConsumoAgua
              type={ConsumptionCategoryEnum.LAVAR_ROUPA}
              icon={IconWashClothes}
              pageSubtitle="Lavar Roupa"
            />
          }
        />
        <Route path="/calculadora-agua" element={<CalculadoraAgua />} />
        <Route path="/consumo-energia" element={<ConsumoEnergia />} />
        <Route path="/calculadora-energia" element={<CalculadoraEnergia />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exemplo para rota privada:
/* 
<Route exact path='/rota' element={<PrivateRoute/>}>
  <Route exact path='/rota' element={<Elemento/>}/>
</Route>
*/
