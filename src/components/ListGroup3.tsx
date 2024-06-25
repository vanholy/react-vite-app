import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup3() {
  let items = ["Milano", "Bergamo", "Venezia"];
  //items = [];
  let selectedIndex = 0;

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const getMessage2 = () => {
    return items.length === 0 && <p>No item found</p>; //se false return false altrimenti ritorna secondo elemento
  };

  const handleDoubleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage2()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => console.log("clicked", item, index, selectedIndex)}
            onDoubleClick={handleDoubleClick} //mostra dettagli del click - funzione solo dichiarata, verrà chiamata poi , sarebbe handleDoubleClick(event)
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup3;
