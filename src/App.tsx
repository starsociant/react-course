import { PokemonClient, Pokemon as PokemonInterface } from "pokenode-ts";
import { useEffect, useState } from "react";
import { PokemonsListing } from "./components";

function App() {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  useEffect(() => {
    const api = new PokemonClient({
      cacheOptions: { ttl: 1000 * 60 * 60 * 24 },
    });
    api.listPokemons().then(({ results }) => {
      Promise.all(results.map(({ name }) => api.getPokemonByName(name))).then(
        (data) => setPokemons(data)
      );
    });
  }, []);

  return (
    <main>
      <PokemonsListing items={pokemons} />
    </main>
  );
}

export default App;
