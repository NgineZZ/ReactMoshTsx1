import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["New York", "Dhaka", "Tokyo", "Kobe", "Los Angle", "Taipe"];
  const heading = "Cities";
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        itemss={items}
        headingg={heading}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
