type Props = {
  children?: React.ReactNode,
  sobrenome?: string,
  aoClicar: (f: number, a: string) => void
}

const Sub = (props: Props) => {

  const acao = () => {
    props.aoClicar(Math.random(), 'Gerado');
  };

  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  );
};

export default Sub;
