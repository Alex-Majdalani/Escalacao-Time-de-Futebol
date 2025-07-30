import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import Lista from "../Lista";
import "./Formulario.css";

const Formulario = (props) => {
  /*Função para a pagina não recarregar quando submeter o formulario*/
  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      origem,
      nome,
      imagem,
      position,
    });
    setImagem("");
    setNome("");
    setOrigem("");
  };

  const [origem, setOrigem] = useState("");
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [position, setPosition] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Origem"
          placeholder="Digite de onde você vem"
          valor={origem}
          aoAlterado={(valor) => setOrigem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Envie o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Lista
          obrigatorio={true}
          label="Position"
          itens={props.posicoes}
          valor={position}
          aoAlterado={(valor) => setPosition(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
