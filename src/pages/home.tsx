import { useEffect } from "react";
import { Pokemon as PokemonInterface } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { Footer, Header, PokemonsListing } from "../components";
import { useLocalStorage, useApi } from "../hooks";
import { login } from "../redux/user/reducer";

export default function Home() {
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();
  const { isLoading, data: pokemonData, error, fetch } = useApi();

  useEffect(() => {
    fetch.listPokemons();
  }, [fetch]);

  useEffect(() => {
    dispatch(login(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <div>The api is loading.</div>
        ) : error ? (
          <div>Error: "{error}" ocurred during the api call.</div>
        ) : (
          <PokemonsListing items={pokemonData as PokemonInterface[]} />
        )}
      </main>
      <Footer />
    </>
  );
}
