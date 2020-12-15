// import React from 'react';

import './card.css';

type Props = {
  children?: React.ReactNode,
  titulo: string,
  color?: string,
}

const Card = (props: Props) =>
  <div className="card" style={
    { borderColor: props.color || '#000' }
  }>
    <div className="conteudo">
      {props.children}
    </div>
    <div className="footer" style={
      { backgroundColor: props.color || '#000' }
    }>
      {props.titulo}
    </div>
  </div>;

export default Card;
