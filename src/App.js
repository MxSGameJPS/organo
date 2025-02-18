import React, { useState } from 'react';
import Banner from "./componentes/Banner";

import Formulario from "./componentes/Formulario";
import Cursos from './componentes/cursos';
import Rodape from './componentes/rodape';

function App() {

  const cursos = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: "Front-end",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Ciência de Dados",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5f9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf"
    },
    {
      nome:"Inglês",
      corPrimaria: "#ffd578",
      corSecundaria: "#95ffd4"
    },
    {
      nome:"Inteligência Artificial",
      corPrimaria: "#6275f5",
      corSecundaria: "#f2f3f4"
    }
  ];
  
  const [alunos, setAlunos] = useState([]);
  

const aoNovoAlunoAdicionado = (aluno) => {  
  setAlunos([...alunos, aluno]);
}

  return (
    <div className="App">
      <Banner />
      <Formulario cursos={cursos.map(curso => curso.nome)} aoAlunoCadastrado = {aluno => aoNovoAlunoAdicionado(aluno)} />
      {cursos.map(curso =>  <Cursos 
      key={curso.nome} 
      nome= {curso.nome} 
      corPrimaria={curso.corPrimaria} 
      corSecundaria={curso.corSecundaria}
      alunos={alunos.filter(aluno => aluno.curso === curso.nome)} 
      />)}
      <Rodape/>       
    </div>
  );
}

export default App;
