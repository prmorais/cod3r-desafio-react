import Filho from './Filho';

type Props = {
  children?: React.ReactNode,
  sobrenome: string,
}

const Pai = (props: Props) => {
  return (
    <div>
      <Filho {...props}>Diogo</Filho>
      <Filho sobrenome={props.sobrenome}>Polliana</Filho>
      <Filho sobrenome="Morais">Ana</Filho>
      <Filho sobrenome="Pinheiro">Ricardo</Filho>
      <Filho sobrenome="Morais">Fernanda</Filho>
    </div>
  );
};

export default Pai;
