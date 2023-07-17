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
  const [typeStates, setTypeStates] = useState(
    types.reduce((obj: any[string], item) => {
      obj[item] = 'off';
      return obj;
    }, {})
  );
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(JSON.parse(
    window.localStorage.getItem("favorites") ?? "[]"
  ));

  useEffect(() => {
    setPokemons(items);
  }, [items]);

  useEffect(() => {
    update()
  }, [search]);

  const update = () => {
    const activeFilters = types.filter((name) => typeStates[name] === 'on');
    console.log(activeFilters)
    setPokemons(
      items.filter((pokemon) =>
        activeFilters.every((name) => pokemon.types.map(({ type }) => type.name).includes(name)) &&
        pokemon.name.includes(search.toLowerCase())
      )
    );
  }

  const filterClick = (type: string) => {
    typeStates[type] = typeStates[type] == 'on' ? 'off' : 'on';
    setTypeStates(typeStates);
    update()
  }

  const handleFavorite = (name: string) => {
    const unix = new Set(favorites);
    unix.has(name)? unix.delete(name) : unix.add(name);
    window.localStorage.setItem("favorites", JSON.stringify(Array.from(unix)));
    setFavorites(Array.from(unix));
  }

  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} handleClick={filterClick} typeStates={typeStates}/>
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
