import styled from "styled-components";
const ListUL = styled.ul`
  list-style: none;
  padding: 15px;
  color: red;
`;

// megli del div perchè non aggiunge un div al codice - posso anche omettere la scritta fragment
function ListGroup() {
  return (
    <ListUL className="list-group">
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ListUL>
  );
}

export default ListGroup;
