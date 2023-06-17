import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((pokemon) => setPokemons(pokemon));
  }, []);
  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} />
    </div>
  );
}

export default App;
