import { useState } from "react";
import Home from "./components/Home";
import Students from "./components/Students";

function App() {
  const [clique, setClique] = useState(false);

  return (
    <div className="App">
      {clique ? (
        <Students />
      ) : (
        <Home setClique={(evento) => setClique(evento)} />
      )}
    </div>
  );
}

export default App;
