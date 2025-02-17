import React, { useState } from 'react';
import Banner from "./componentes/Banner";

import Formulario from "./componentes/Formulario";
import Cursos from './componentes/cursos';

function App() {
  
  const [alunos, setAlunos] = useState([]);

const aoNovoAlunoAdicionado = (aluno) => {
  console.log(aluno);
  setAlunos([...alunos, aluno]);
}

  return (
    <div className="App">
      <Banner />
      <Formulario aoAlunoCadastrado = {aluno => aoNovoAlunoAdicionado(aluno)} />
      <Cursos nome= "Programação" />
      <Cursos nome= "Front-End" />
      <Cursos nome= "Data Science" />
    </div>
  );
}

export default App;
