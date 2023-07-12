import { useEffect, useState } from "react";
import { Filter, Search } from "..";
import PokemonListItem, { PokemonInterface } from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

interface PokemonsListingProps {
  items: PokemonInterface[];
}

export default function PokemonsListing({ items = [] }: PokemonsListingProps) {
  const types = [...new Set(items.map((i) => i.types).flat())];
  const [pokemons, setPokemons] = useState<PokemonInterface[]>(items);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilter = (type: string) => {
    if (type === '') {
      return setPokemons(items.filter(pokemon => pokemon.name.includes(search.toLowerCase())));
    }

    setFilter(type);
    setPokemons(items.filter(pokemon => pokemon.name.includes(search.toLowerCase())).filter((pokemon) => pokemon.types.includes(type)));
  };

  const handleSearch = (e: any) => {
    setSearch(e);

    if (filter.length <= 0) {
      return setPokemons(items.filter(pokemon => pokemon.name.includes(e.toLowerCase())));
    }

    if (e.length > 0) {
      return setPokemons(items.filter((pokemon) => pokemon.types.includes(filter)).filter(pokemon => pokemon.name.includes(e.toLowerCase())));
    }

    setSearch('');
    setPokemons(items.filter((pokemon) => pokemon.types.includes(filter)));
  }

  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} handleClick={handleFilter} />
        <Search handleChange={handleSearch} />
      </div>
      <div className={styles.Container}>
        {pokemons.map((pokemon, i) => (
          <PokemonListItem {...pokemon} key={`pokemonslist-item-${i}`} />
        ))}
      </div>
    </section>
  );
}
