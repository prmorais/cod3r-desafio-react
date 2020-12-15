import { useState } from 'react';

const Input = () => {
  const [nome, setNome] = useState('Paulo');

  return (
    <>
      <h3>{nome}</h3>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
    </>
  );
};

export default Input;
