import { useState } from 'react';
import Sub from './Sub';

const Super = () => {

  const [texto, setTexto] = useState('Valor');
  const [num, setNum] = useState(0);

  function quandoClicar(
    valorPassadoPeloComponenteSub: number, textoVindoDoComponenteSub: string,
  ) {
    setNum(valorPassadoPeloComponenteSub);
    setTexto(textoVindoDoComponenteSub);
  };

  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub aoClicar={quandoClicar}></Sub>
    </div>
  );
};

export default Super;
