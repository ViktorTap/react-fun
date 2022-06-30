import "./App.css";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const backgroundColor = event.target.value;
    setColor(backgroundColor);
  };
  return (
    <main className="app--main">
      <Square color={color} handleChange={handleChange} />
    </main>
  );
}

export default App;
