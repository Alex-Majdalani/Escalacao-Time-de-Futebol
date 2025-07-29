import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Posicoes from "./componentes/Posicoes";

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
      corSecundaria: "#E3F4FF",
    },
    {
      nome: "Lateral Esquerdo",
      corPrimaria: "#2980B9",
      corSecundaria: "#D6ECFF",
    },
    {
      nome: "Volante",
      corPrimaria: "#FFF176",
      corSecundaria: "#FFFDE7",
    },
    {
      nome: "Centroavante",
      corPrimaria: "#FBC02D",
      corSecundaria: "#FFF9E1",
    },
    {
      nome: "Meia",
      corPrimaria: "#FFD54F",
      corSecundaria: "#FFF7DA",
    },
    {
      nome: "Meia Ofensivo",
      corPrimaria: "#FFCA28",
      corSecundaria: "#FFF3CD",
    },
    {
      nome: "Meia Defensivo",
      corPrimaria: "#FFB300",
      corSecundaria: "#FFF0C2",
    },
    {
      nome: "Ponta Direita",
      corPrimaria: "#FFB74D",
      corSecundaria: "#FFF3E0",
    },
    {
      nome: "Ponta Esquerda",
      corPrimaria: "#F57C00",
      corSecundaria: "#FFE8D6",
    },
    {
      nome: "Atacante",
      corPrimaria: "#E53935",
      corSecundaria: "#FFE5E5",
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
    console.log(jogador);
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
        />
      ))}
    </div>
  );
}

export default App;
