import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Scatterplot from "./Scatterplot";
import Card from "./Card";
import FilterCard from "./FilterCard";
import './App.css'

import * as d3 from "d3";
import PokeCard from './PokeCard';

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

export default function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [searchText, setSearchText] = useState("");

  const pokemonColors = {
    "Water": "#7ec8e3",
    "Fire": "#e8a87c",
    "Grass": "#a8d5a2",
    "Electric": "#f0e68c",
    "Psychic": "#d4a5d4",
    "Normal": "#c0bfbf",
    "Ghost": "#b39ddb",
    "Dragon": "#f0c08a",
    "Fighting": "#c9a28a",
    "Rock": "#a8b0b5"
  };

  const pokemonTypes = [...new Set(pokemons.map(p => p.type))].sort();
  const filteredPokemons = pokemons
    .filter(p => !selectedType || p.type === selectedType)
    .filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
  const pokemonNames = [...new Set(filteredPokemons.map(p => p.name))].sort();

  return (
    <>
      <h1>CHOOSE YOUR<br></br>POKÉMON CHAMPION</h1>
      <h2>Step 1: Filter by type</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {pokemonTypes.map((type, i) => (
          <FilterCard
            key={i}
            color={pokemonColors[type]}
            selected={selectedType === type}
            onClick={() => setSelectedType(selectedType === type ? null : type)}
          >
            {type}
          </FilterCard>
        ))}
      </div>
       <h2>Step 2: Choose your Pokémon</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: "8px 12px",
          marginBottom: 12,
          width: 300,
          borderRadius: 4,
          border: "1px solid #9c9c9c",
          fontSize: 16,
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {pokemonNames.map((name, i) => (
          <PokeCard key={i} color={pokemonColors[pokemons.find(p => p.name === name).type]} id={pokemons.find(p => p.name === name).id}>{name}</PokeCard>
        ))}
      </div>
    </>
  );
}
