type Props = {
  children?: React.ReactNode,
  sobrenome: string,
}

const Filho = (props: Props) => {
  return (
    <div>
      <p>{props.children} {props.sobrenome}</p>
    </div>
  );
};

export default Filho;
