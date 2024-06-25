import ListGroup from "./components/2Styling/ListGroup";
import { useState } from "react";
import ListGroup2 from "./components/2Styling/ListGroup2";
import ListGroup3 from "./components/2Styling/ListGroup3";
import Like from "./components/2Styling/Like";

import { DiChrome } from "react-icons/di"; //ICONE -copia da sito

function App() {
  let citta = ["Milano", "Bergamo", "Venezia"];
  let alertLabel = "Lancia alert";
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Like onClick={() => console.log("click") } />
      <DiChrome size={200} color="red"></DiChrome>
      <ListGroup />
      <ListGroup2 />
      <ListGroup3 />
    </div>
  );
}

export default App;
