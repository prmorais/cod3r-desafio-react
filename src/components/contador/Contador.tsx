import React, { useState } from 'react';

import './contador.css';
import ContadorBotoes from './ContadorBotoes';
import ContadorForm from './ContadorForm';
import Display from './ContadorDisplay';

type Props = {
  passo?: number,
  valor?: number,
}

const Contador: React.FC<Props> = (props) => {
  const state = {
    passo: props.passo || 1,
    valor: props.valor || 0,
  };

  const [valor, setValor] = useState(state.valor);
  const [passo, setPasso] = useState(state.passo);

  const inc = () => {
    setValor(valor + passo);
    ;
  };

  const dec = () => {
    setValor(valor - passo);;
  };

  const mudarPasso = (valor: number) => {
    setPasso(valor);
  };

  return (
    <div className="contador">
      <h2>Contador</h2>

      <ContadorForm passo={passo} onPassoChange={mudarPasso} />

      <Display valor={valor} />

      <ContadorBotoes onInc={inc} onDec={dec} />

    </div>
  );
};

export default Contador;
