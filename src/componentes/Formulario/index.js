import { useState } from 'react';
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const cursos = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
    "Inglês",
    "Inteligência Artificial",
  ];

  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [imagem, setImagem] = useState("");
  const [curso, setCurso] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoAlunoCadastrado({
      nome,
      nota,
      imagem,
      curso
    })
  };



  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos alunos destaques</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Nota"
          placeholder="Digite seu cargo"
          valor={nota}
          aoAlterado={valor => setNota(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite a URL da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          required={true} 
          label="Curso" 
          itens={cursos} 
          valor={curso} 
          aoAlterado={valor => setCurso(valor)} 
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
