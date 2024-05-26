import { useState } from "react";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";

function App() {
  const [catrItems, setCartItems] = useState(["p1", "p2"]);
  return (
    <div>
      <NavBar CartItemCounts={catrItems.length} />
      <Cart cartItems={catrItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
