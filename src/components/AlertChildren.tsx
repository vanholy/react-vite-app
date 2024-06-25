//uso children per le props

import { ReactNode } from "react";

interface Props {
  children: ReactNode; //potrei passare text, ma per struttura piu complessa uso react node
}

//Componente creat ocon ES7+
const AlertChildren = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default AlertChildren;
