import "./Curso.css";

const Cursos = (props) => {
  return (
    <section
      className="cursos"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Cursos;
