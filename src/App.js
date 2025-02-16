import React, { useState } from 'react';
import Banner from "./componentes/Banner";

import Formulario from "./componentes/Formulario";

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
    </div>
  );
}

export default App;
