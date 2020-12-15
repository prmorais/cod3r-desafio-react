import React from 'react';

type Props = {
  onInc: () => void,
  onDec: () => void,
}

const ContadorBotoes: React.FC<Props> = ({ onDec, onInc }) => {
  return (
    <div>
      <button onClick={onInc}>+</button>
      <button onClick={onDec}>-</button>
    </div>
  );
};

export default ContadorBotoes;
