import { PokemonsListing } from "./components";
import pokemons from "./pokemons.json";

function App() {
  return (
    <main>
      <PokemonsListing items={pokemons} />
    </main>
  );
}

export default App;
