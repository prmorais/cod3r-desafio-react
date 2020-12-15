import React, { useState } from 'react';

type Props = {
  qtdNumero: number,
}

const Mega: React.FC<Props> = (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0));

  const gerarNumerosNaoContidos = (array: number[]): number => {
    const min = 1;
    const max = 100;

    const novoNumero = parseInt((Math.random() * (max - min) + min).toString());

    return array.includes(novoNumero)
      ? gerarNumerosNaoContidos(array)
      : novoNumero;
  };

  const gerarNumeros = () => {
    const novoArray: number[] = Array(props.qtdNumero)
      .fill(0)
      .reduce((a, e) => {
        const novoNumero = gerarNumerosNaoContidos(a);
        console.log(a, e, novoNumero);
        return [...a, novoNumero];
      }, [])
      .sort((a: number, b: number) => a - b);
    setNumeros(novoArray);
  };

  return (
    <>
      <h3>Mega</h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros} >Gerar números</button>
    </>
  );
};

export default Mega;
