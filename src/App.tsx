import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [alertVisible, setAleartVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAleartVisibility(false)}>An Aleart</Alert>
      )}
      <Button colour="warning" onClick={() => setAleartVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
