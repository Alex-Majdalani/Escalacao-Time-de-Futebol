import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Posicoes from "./componentes/Posicoes";

function App() {
  /*Criar um estado para os jogadores */
  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador);
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <h1>Futebol das Quartas</h1>
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      <Posicoes nome="Goleiro" />
      <Posicoes nome="Lateiral Direito" />
      <Posicoes nome="Zagueiro" />
    </div>
  );
}

export default App;
