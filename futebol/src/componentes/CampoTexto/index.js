import "./CampoTexto.css";

const CampoTexto = (props) => {
  /*Função para guardar o valor digitado no input dentro de uma variável*/
  let valor = "";
  const aoDigitar = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitar}
        value={valor}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
