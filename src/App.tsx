import React, { useEffect, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { fetchTypes } from "./services/API";

function App() {
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);

  useEffect(() => {
    fetchTypes().then((types) => {
      const typeNames = types.map((type) => type.name);
      setPokemonTypes(typeNames);
    });
  }, []);

  return (
    <div className="App">
      <Sidebar types={pokemonTypes} />
    </div>
  );
}

export default App;
