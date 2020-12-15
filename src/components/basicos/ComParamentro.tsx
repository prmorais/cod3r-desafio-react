// import React from 'react';

type Props = {
  titulo: string,
  subtitulo: string,
}

const ComParametro = (props: Props) =>
  <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
  </>;

export default ComParametro;
