// import React from 'react';
type Props = {
  numero: number
}

const Condicional = (props: Props) => {
  return (
    <div>
      <h2>O número é {props.numero}</h2>
      {
        props.numero % 2 === 0
          ? <span>Par</span>
          : <span>Ímpar</span>
      }
    </div>
  );
};

export default Condicional;
