interface Props {
  text: string;
}

//Componente creat ocon ES7+
const Alert = ({ text }: Props) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
