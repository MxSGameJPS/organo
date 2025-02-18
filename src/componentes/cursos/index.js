import CardAluno from "../CardAluno";
import "./Curso.css";

const Cursos = (props) => {
  return (
   props.alunos.length > 0 && <section
      className="cursos"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="alunos">
      {props.alunos.map(aluno => <CardAluno corDeFundo={props.corPrimaria} key={aluno.nome} nome={aluno.nome} curso={aluno.curso} imagem={aluno.imagem} nota={aluno.nota}/>)}
      </div>
    </section>
  );
};

export default Cursos;
