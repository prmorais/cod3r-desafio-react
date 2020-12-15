// import React from 'react';
import './app.css';
import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParamentro';
import Condicional from './components/basicos/Condicional';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Repeticao from './components/basicos/Repeticao';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/fomulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega';

const App = () =>
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="cards">
      <Card titulo="#10 - Mega" color=" #06fa4f" >
        <Mega qtdNumero={7} />
      </Card>

      <Card titulo="#9 - Contador" color=" #c514b6" >
        <Contador passo={10} valor={100} />
      </Card>

      <Card titulo="#8 - Formulário" color=" #0b0835" >
        <Input />
      </Card>

      <Card titulo="#7 - Comunicação Indireta" color="#00A03E" >
        <Super />
      </Card>

      <Card titulo="#6 - Comunicação Direta" color="#17A697" >
        <Pai sobrenome="Silva" />
      </Card>

      <Card titulo="#5 - Condicional" color="#69D2E7" >
        <Condicional numero={5} />
      </Card>

      <Card titulo="#04 - Repetição" color="#1FDA9A" >
        <Repeticao />
      </Card>

      <Card titulo="#03 - Componente com filhos" color="#FFC33C" >
        <ComFilhos >
          <ul>
            <li>Paulo Roberto</li>
            <li>Patrícia Nunes</li>
            <li>Maria Fernanda</li>
          </ul>

        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com parâmetros" color="#F07818" >
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#9B539C" >
        <Primeiro />
      </Card>

    </div>

  </div>;

export default App;
