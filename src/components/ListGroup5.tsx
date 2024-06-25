import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

// PROPS sono immutabili, anche se modifico il loro valore non cambia
// {items: [] , heading :string}
//interface typescript
interface Props {
  items: string[];
  heading: string;

  //In questo modo porto l'informazione in App
  // (item:string)=> void elemento selezionato
  onSelectItem: (item: string) => void;
}

//qui ho decostruito le props
function ListGroup5({ items, heading, onSelectItem }: Props) {
  //function ListGroup4({items,heading}: Props) {

  //STATE
  //Hook (state hook) - ogni component dichiarato in App  ha un suo stato
  //const [name, setName]= useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; //variable
  //arr[1]; //funzione update

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>; //se false return false altrimenti ritorna secondo elemento
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup5;
