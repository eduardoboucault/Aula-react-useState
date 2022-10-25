import React from "react";
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton,
  ImagemPokemon
} from "./styles";

const PokemonCard = (props) => {
  return (
    <Card color={props.color}>
      <ImagemPokemon src={props.img} alt={`Pokemon`} />
      <PokemonName>{props.name}</PokemonName>
      <PokemonType>{props.type}</PokemonType>
      <p>{props.weight}kg</p>
      <EvolveButton onClick={props.functionEvolve}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
