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

  useEffect(() => {
    if (!search) {
      return;
    }

    setPokemons(pokemons.filter(({ name }) => name.includes(search)));
  }, [pokemons, search]);

  console.log(Date.now());

  useEffect(() => {
    console.log(Date.now());
  });

  const filter = (type: string) => {
    if (!type) {
      setPokemons(items);
      return;
    }

    setPokemons(items.filter((pokemon) => pokemon.types.includes(type)));
  };

  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} handleClick={filter} />
        <Search handleChange={setSearch} />
      </div>
      <div className={styles.Container}>
        {pokemons.map((pokemon, i) => (
          <PokemonListItem {...pokemon} key={`pokemonslist-item-${i}`} />
        ))}
      </div>
    </section>
  );
}
