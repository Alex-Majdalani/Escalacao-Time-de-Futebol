import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  /*Criar um estado para os jogadores */
  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador);
  };

  return (
    <div className="App">
      <h1>Futebol das Quartas</h1>
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
    </div>
  );
}

export default App;
