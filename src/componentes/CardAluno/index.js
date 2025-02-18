import "./Cardaluno.css";

const CardAluno = ({nome, curso, imagem, nota, corDeFundo}) => {
  console.log(curso)
  return (
    <div className="card-aluno">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem || 'caminho/para/imagem/default.png'}  alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h4>{nota}</h4>
        <h5>{curso}</h5>

      </div>
    </div>
    
  );
};

export default CardAluno;
