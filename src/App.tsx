import { Filters, Modal, PokemonsList, Search } from "./components";

function App() {
  const pokemons = [
    {
      name: "Pichu",
    },
    {
      name: "Pikachu",
    },
    {
      name: "Raichu",
    },
    {
      name: "Raichu",
    },
    {
      name: "Raichu",
    },
    {
      name: "Raichu",
    },
    {
      name: "Raichu",
    },
  ];
  return (
    <main>
      <div>
        <Search />
        <Filters />
      </div>
      <PokemonsList items={pokemons} />
      <Modal />
    </main>
  );
}

export default App;
