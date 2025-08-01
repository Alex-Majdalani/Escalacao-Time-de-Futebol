import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Posicoes from "./componentes/Posicoes";
import Rodape from "./componentes/Rodape";

function App() {
  const posicoes = [
    {
      nome: "Goleiro",
      corPrimaria: "#A8E6A1",
      corSecundaria: "#F3FDE9",
    },
    {
      nome: "Zagueiro",
      corPrimaria: "#5EB764",
      corSecundaria: "#D4F0D3",
    },
    {
      nome: "Lateral Direito",
      corPrimaria: "#6BB9F0",
      corSecundaria: "#d7efffff",
    },
    {
      nome: "Lateral Esquerdo",
      corPrimaria: "#2980B9",
      corSecundaria: "#bedaf3ff",
    },
    {
      nome: "Meio Campo",
      corPrimaria: "#FFB300",
      corSecundaria: "#FFF0C2",
    },
    {
      nome: "Ponta Direita",
      corPrimaria: "#FFB74D",
      corSecundaria: "#ffe9c3ff",
    },
    {
      nome: "Ponta Esquerda",
      corPrimaria: "#F57C00",
      corSecundaria: "#fdcaa2ff",
    },
    {
      nome: "Atacante",
      corPrimaria: "#E53935",
      corSecundaria: "#e7a3a3ff",
    },
    {
      nome: "Reserva",
      corPrimaria: "#212121",
      corSecundaria: "#BDBDBD",
    },
  ];

  /*Criar um estado para os jogadores */
  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    //console.log(jogador);
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <h1>Futebol das Quartas</h1>
      <Banner />
      <Formulario
        posicoes={posicoes.map((posicao) => posicao.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {posicoes.map((posicoes) => (
        <Posicoes
          key={posicoes.nome}
          nome={posicoes.nome}
          corPrimaria={posicoes.corPrimaria}
          corSecundaria={posicoes.corSecundaria}
          jogadores={jogadores.filter(
            (jogador) => jogador.position === posicoes.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
