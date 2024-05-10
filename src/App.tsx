import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["New York", "Dhaka", "Tokyo", "Kobe", "Los Angle", "Taipe"];
  const heading = "Cities";

  return (
    <div>
      <ListGroup itemss={items} headingg={heading} />
    </div>
  );
}

export default App;
