import { useEffect, useState } from "react";
import { Pokemon as PokemonInterface } from "pokenode-ts";
import { Filter, Search } from "..";
import PokemonListItem from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

interface PokemonsListingProps {
  items: PokemonInterface[];
}

// pokemon -> tipos[] -> tipo -> nome
const extractTypesFromPokemonList = (
  pokemons: PokemonInterface[]
): string[] => {
  const pokemonTypes = pokemons.map(({ types }) => types).flat();
  return [...new Set(pokemonTypes.map(({ type }) => type.name))];
};

export default function PokemonsListing({ items = [] }: PokemonsListingProps) {
  const types = extractTypesFromPokemonList(items);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>(items);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(JSON.parse(
    window.localStorage.getItem("favorites") ?? "[]"
  ));

  // Recuperar a lista de favoritos
  // Verificar se o pokemon está na lista
  // Exibir propriamente o botão de fav/unfav

  useEffect(() => {
    setPokemons(items);
  }, [items]);

  useEffect(() => {
    if (!search) {
      return;
    }

    setPokemons(pokemons.filter((pokemon) => pokemon.name.includes(search)));
  }, [pokemons, search]);

  const filter = (type: string) => {
    if (!type) {
      setPokemons(items);
      return;
    }

    setPokemons(
      items.filter((pokemon) =>
        pokemon.types.map(({ type }) => type.name).includes(type)
      )
    );
  };

  const handleFavorite = (name: string) => {
    const unix = new Set(favorites);
    unix.add(name);
    window.localStorage.setItem("favorites", JSON.stringify(Array.from(unix)));
    setFavorites(Array.from(unix));
  }

  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} handleClick={filter} />
        <Search handleChange={setSearch} />
      </div>
      <div className={styles.Container}>
        {pokemons.map((pokemon, i) => {
          const isFav = favorites.includes(pokemon.name);
          return (
            <PokemonListItem
              {...pokemon}
              key={`pokemonslist-item-${i}`}
              isFav={isFav}
              handleFavorite={handleFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}
