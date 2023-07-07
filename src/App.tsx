import { PokemonsListing } from "./components";

function App() {
  const pokemons = [
    {
      name: "Pichu",
      types: ["Eletric"],
    },
    {
      name: "Pikachu",
      types: ["Eletric"],
    },
    {
      name: "Raichu",
      types: ["Eletric"],
    },
    {
      name: "Raichu",
      types: ["Eletric"],
    },
    {
      name: "Raichu",
      types: ["Eletric"],
    },
    {
      name: "Raichu",
      types: ["Eletric"],
    },
    {
      name: "Raichu",
      types: ["Eletric"],
    },
  ];
  return (
    <main>
      <PokemonsListing items={pokemons} />
    </main>
  );
}

export default App;
