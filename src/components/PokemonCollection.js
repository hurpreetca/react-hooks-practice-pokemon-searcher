import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const displayCollection = pokemons.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        sprites={pokemon.sprites}
        hp={pokemon.hp}
      />
    );
  });
  return (
    <Card.Group itemsPerRow={6}>
      <h1>{displayCollection}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
