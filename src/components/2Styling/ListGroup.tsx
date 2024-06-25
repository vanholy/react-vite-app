import styles from "./ListGroup.module.css"; //css module - permette di usare css sicuri non sovrascritti da esterno
import { Fragment } from "react/jsx-runtime";

// megli del div perchè non aggiunge un div al codice - posso anche omettere la scritta fragment
function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
