import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

// {items: [] , heading :string}
//interface typescript
interface Props {
  items: string[];
  heading: string;
}

function ListGroup4(props: Props) {
  //function ListGroup4({items,heading}: Props) {

  //Hook (state hook) - ogni component dichiarato in App  ha un suo stato
  //const [name, setName]= useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; //variable
  //arr[1]; //funzione update

  const getMessage = () => {
    return props.items.length === 0 && <p>No item found</p>; //se false return false altrimenti ritorna secondo elemento
  };

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup4;
