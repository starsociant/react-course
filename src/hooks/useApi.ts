import { useState, useCallback, useMemo } from "react";
import {
  PokemonClient,
  Pokemon as PokemonInterface,
  NamedAPIResource,
} from "pokenode-ts";

export default function useAPI() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PokemonInterface[] | NamedAPIResource[]>([]);
  const [error, setError] = useState("");
  const api = useMemo(
    () =>
      new PokemonClient({
        cacheOptions: { ttl: 1000 * 60 * 60 * 24 },
      }),
    []
  );

  // TODO: Convert listPokemon to return NamedAPIResource type (Promise)
  const fetch = {
    listPokemons: useCallback(() => {
      api
        .listPokemons()
        .then(({ results }) => {
          Promise.all(
            results.map(({ name }) => api.getPokemonByName(name))
          ).then((data) => {
            setData(data);
            setIsLoading(false);
          });
        })
        .catch((error) => setError(error.message));
    }, [api]),
    listTypes: useCallback(() => {
      api.listTypes().then(({ results }) => {
        setData(results);
        setIsLoading(false);
      });
    }, [api]),
  };

  return {
    isLoading,
    data,
    error,
    fetch,
  };
}
