import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyle";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { FlexContainer } from "./Components/PokemonCard/styles";

function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0
  });

  const evolvePokemon = () => {
    setPokemon({
      ...pokemon,
      name: "Pikachu",
      evolved: true,
      weight: 5,
      image:
        "https://archives.bulbagarden.net/media/upload/b/b1/025Pikachu_XY_anime_3.png"
    });
  };

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass/Poison",
    evolved: false,
    weight: 6.9,
    color: "lightgreen",
    image:
      "https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png",
    id: 0
  });

  const evolvePokemon2 = () => {
    setPokemon2({
      ...pokemon2,
      name: "Ivysaur",
      evolved: true,
      weight: 13.0,
      color: "green",
      image: "https://archives.bulbagarden.net/media/upload/7/73/002Ivysaur.png"
    });
  };

  const [pokemon3, setPokemon3] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/7/73/004Charmander.png",
    id: 0
  });

  const evolvePokemon3 = () => {
    setPokemon3({
      ...pokemon3,
      name: "Charmeleon",
      evolved: true,
      weight: 19.0,
      color: "red",
      image:
        "https://archives.bulbagarden.net/media/upload/4/4a/005Charmeleon.png"
    });
  };

  const [pokemon4, setPokemon4] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9.0,
    color: "lightblue",
    image: "https://archives.bulbagarden.net/media/upload/3/39/007Squirtle.png",
    id: 0
  });

  const evolvePokemon4 = () => {
    setPokemon4({
      ...pokemon4,
      name: "Wartortle",
      evolved: true,
      weight: 22.5,
      color: "blue",
      image:
        "https://archives.bulbagarden.net/media/upload/0/0c/008Wartortle.png"
    });
  };

  const [pokemon5, setPokemon5] = useState({
    name: "Mew",
    type: "Psychic",
    evolved: false,
    weight: 4.0,
    color: "pink",
    image: "https://archives.bulbagarden.net/media/upload/b/b1/151Mew.png",
    id: 0
  });

  const evolvePokemon5 = () => {
    setPokemon5({
      ...pokemon5,
      name: "Mewtwo",
      evolved: true,
      weight: 122.0,
      color: "purple",
      image: "https://archives.bulbagarden.net/media/upload/7/78/150Mewtwo.png"
    });
  };

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          color={pokemon.color}
          img={pokemon.image}
          name={pokemon.name}
          type={pokemon.type}
          weight={pokemon.weight}
          functionEvolve={evolvePokemon}
        />
        <PokemonCard
          color={pokemon2.color}
          img={pokemon2.image}
          name={pokemon2.name}
          type={pokemon2.type}
          weight={pokemon2.weight}
          functionEvolve={evolvePokemon2}
        />
        <PokemonCard
          color={pokemon3.color}
          img={pokemon3.image}
          name={pokemon3.name}
          type={pokemon3.type}
          weight={pokemon3.weight}
          functionEvolve={evolvePokemon3}
        />
        <PokemonCard
          color={pokemon4.color}
          img={pokemon4.image}
          name={pokemon4.name}
          type={pokemon4.type}
          weight={pokemon4.weight}
          functionEvolve={evolvePokemon4}
        />
        <PokemonCard
          color={pokemon5.color}
          img={pokemon5.image}
          name={pokemon5.name}
          type={pokemon5.type}
          weight={pokemon5.weight}
          functionEvolve={evolvePokemon5}
        />
      </FlexContainer>
    </>
  );
}

export default App;
