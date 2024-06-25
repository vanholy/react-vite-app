import ListGroup from "./components/ListGroup"; //fragment
import ListGroup2 from "./components/ListGroup2"; //map
import ListGroup3 from "./components/ListGroup3"; //state
import ListGroup4 from "./components/ListGroup4"; //props passaggio parametri esterni
import ListGroup5 from "./components/ListGroup5"; //funzione esterna onSelectItem
import Alert from "./components/Alert"; //componente con const di funzione x
import AlertChildren from "./components/AlertChildren"; //children - leggo quello contenuto nel tag di app (text o ReactNode per robe complesse)
import Button from "./components/Button";
import Button2 from "./components/Button2";
import { useState } from "react";
import AlertButton from "./components/AlertButton";

function App() {
  let citta = ["Milano", "Bergamo", "Venezia"];
  let alertLabel = "Lancia alert";
  const [alertVisible, setAlertVisibility] = useState(false);

  // Chiamata all'interno del component, così facendo non itacco il component con della logica
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Push me up !!!
      </Button>
      <Alert text="Attenzione Alert attivo" />

      <Button2  onClick={() => setAlertVisibility(true)}>
        {alertLabel}
      </Button2>
      {alertVisible && <AlertButton onClose={()=> setAlertVisibility(false)}> CIAO
        </AlertButton>}

      <ListGroup5
        items={citta}
        heading="Città"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
