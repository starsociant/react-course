import { useEffect, useState } from "react";
import { PokemonClient, Pokemon as PokemonInterface } from "pokenode-ts";
import { Header, PokemonsListing } from "./components";
import { AuthContext } from "./context";
import { UserType } from "./context/AuthContext";
import { useLocalStorage } from "./hooks";

function App() {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [userFromStorage] = useLocalStorage("user");
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    setUser(userFromStorage);
  }, [userFromStorage]);

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
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />
        <main>
          <PokemonsListing items={pokemons} />
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
