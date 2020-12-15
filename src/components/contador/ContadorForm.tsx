import React from 'react';

type Props = {
  passo: number,
  onPassoChange: (f: number) => void
}

const ContadorForm: React.FC<Props> = ({ passo, onPassoChange }) => {

  return (
    <div>
      <label htmlFor="passoInput">Passo:</label>
      <input
        id="passoInput"
        type="number"
        value={passo}
        onChange={(e) => onPassoChange(+e.target.value)}
      />
    </div>
  );
};

export default ContadorForm;
