import { useEffect, useState } from "react";
import { PokemonClient, Pokemon as PokemonInterface } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { Footer, Header, PokemonsListing } from "../components";
import { useLocalStorage } from "../hooks";
import { login } from "../redux/user/reducer";

function App() {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(login(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <main>
        <PokemonsListing items={pokemons} />
      </main>
      <Footer />
    </>
  );
}

export default App;
