import React from 'react';

type Props = {
  valor: number,
}

const ContadorDisplay: React.FC<Props> = ({ valor }) => {
  return (
    <h3>Valor: {valor}</h3>
  );
};

export default ContadorDisplay;
