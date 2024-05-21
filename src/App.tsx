import { Like } from "./Components/Like";
// import Button from "./Components/Button/Button";



function App() {
  return (
    <div>
      <Like onClicked={()=> console.log("clicked")} />
    </div>
  );
}

export default App;
