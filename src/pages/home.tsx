import { useEffect } from "react";
import { Pokemon as PokemonInterface } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { Footer, Header, PokemonsListing } from "../components";
import { useLocalStorage, useApi } from "../hooks";
import { login } from "../redux/user/reducer";
import { useMemo } from "react";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";

export default function Home() {
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();
  const { isLoading, data: pokemonData, error, fetch } = useApi();
  const [newData, setNewData] = useState<PokemonInterface[]>([]);

  useEffect(() => {
    fetch.listPokemons();
  }, [fetch]);

  useEffect(() => {
    const api = new PokemonClient({
      cacheOptions: { ttl: 1000 * 60 * 60 * 24 },
    });
    pokemonData.length &&
      Promise.all(
        pokemonData.map(({ name }) => {
          return api.getPokemonByName(name);
        })
      ).then((data) => {
        setNewData(data);
      });
  }, [pokemonData]);

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
          <PokemonsListing items={newData} />
        )}
      </main>
      <Footer />
    </>
  );
}
