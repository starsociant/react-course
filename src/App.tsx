import { PokemonClient, Pokemon as PokemonInterface } from "pokenode-ts";
import { useEffect, useState } from "react";
import { PokemonsListing } from "./components";

function App() {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  useEffect(() => {
    (async () => {
      const api = new PokemonClient();
      const { results } = await api.listPokemons();
      Promise.all(
        results.map(({ name }) => new PokemonClient().getPokemonByName(name))
      ).then((data) => setPokemons(data));
    })();
  }, []);

  return (
    <main>
      <PokemonsListing items={pokemons} />
    </main>
  );
}

export default App;
