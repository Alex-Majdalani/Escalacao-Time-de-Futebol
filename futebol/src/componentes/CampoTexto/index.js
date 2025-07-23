import "./CampoTexto.css";

const CampoTexto = (props) => {
  /*Função para guardar o valor digitado no input dentro de uma variável*/
  //let valor = "Alex Majdalani";
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
