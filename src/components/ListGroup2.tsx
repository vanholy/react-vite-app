import { Fragment } from "react/jsx-runtime";

function ListGroup2() {
  let items = ["Milano", "Bergamo", "Venezia"];
  items = [];
  // items.map((item) => <li>{item}</li>); mappo

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
